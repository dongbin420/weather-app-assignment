import { Link } from 'react-router';
import { idToLabel } from '@/shared/lib/place/idToLabel';
import { useFavoritesStore } from '@/features/favorite/model/store';
import { useLabelToCoordQuery } from '@/entities/place/api/useLabelToCoordQuery';
import { pickFirstCoords } from '@/entities/place/model/pickFirstCoords';
import { useOneCallQuery } from '@/entities/weather/api/useOneCallQuery';
import { useMemo } from 'react';
import { hasMinimumWeatherData } from '@/entities/weather/model/hasMinimumWeatherData';
import { mapToWeatherUiModel } from '@/entities/weather/model/mapToWeatherUiModel';
import FavoriteAliasEditButton from '@/features/favorite/ui/AliasEditButton';
import FavoriteRemoveButton from '@/features/favorite/ui/RemoveButton';

interface FavoriteCardProps {
  placeId: string;
}

function FavoriteCard({ placeId }: FavoriteCardProps) {
  const baseLabel = placeId ? idToLabel(placeId) : '';
  const alias = useFavoritesStore((s) => s.aliasesById?.[placeId]);
  const placeLabel = alias ?? baseLabel;

  const coordQuery = useLabelToCoordQuery(baseLabel);
  const coords = coordQuery.data ? pickFirstCoords(coordQuery.data) : undefined;
  const lat = coords?.lat ? coords.lat : Number.NaN;
  const lon = coords?.lon ? coords.lon : Number.NaN;
  const oneCall = useOneCallQuery({ lat, lon });

  const weatherUi = useMemo(() => {
    if (!hasMinimumWeatherData(oneCall.data)) return undefined;
    return mapToWeatherUiModel(placeLabel, oneCall.data);
  }, [oneCall.data, placeLabel]);

  if (oneCall.isLoading) {
    return (
      <div className="rounded-2xl border border-white/60 bg-white/20 p-4 text-sm text-white/80">
        {baseLabel} 불러오는 중...
        <div className="mt-3 flex justify-end gap-2">
          <FavoriteAliasEditButton placeId={placeId} baseLabel={baseLabel} currentAlias={alias} />
          <FavoriteRemoveButton placeId={placeId} placeLabel={placeLabel} />
        </div>
      </div>
    );
  }

  if (oneCall.error) {
    return (
      <div className="rounded-2xl border border-white/60 bg-white/20 p-4 text-sm text-red-200">
        {baseLabel} 날씨 에러: {oneCall.error.message}
        <div className="mt-3 flex justify-end gap-2">
          <FavoriteAliasEditButton placeId={placeId} baseLabel={baseLabel} currentAlias={alias} />
          <FavoriteRemoveButton placeId={placeId} placeLabel={placeLabel} />
        </div>
      </div>
    );
  }

  if (!weatherUi) {
    return (
      <div className="rounded-2xl border border-white/60 bg-white/20 p-4 text-sm text-white/80">
        {baseLabel}의 날씨 정보가 제공되지 않습니다.
        <div className="mt-3 flex justify-end gap-2">
          <FavoriteAliasEditButton placeId={placeId} baseLabel={baseLabel} currentAlias={alias} />
          <FavoriteRemoveButton placeId={placeId} placeLabel={placeLabel} />
        </div>
      </div>
    );
  }

  return (
    <Link to={`/place/${encodeURIComponent(placeId)}`} className="block">
      <div className="rounded-2xl border border-white/60 bg-white/20 p-4 transition hover:bg-white/8 ">
        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-white">{weatherUi.placeLabel}</div>
              {alias?.trim() ? <div className="mt-1 text-xs text-white/90">{baseLabel}</div> : null}
              <div className="mt-1 text-xs text-white/70">
                최저 {weatherUi.todayMin}° / 최고 {weatherUi.todayMax}°
              </div>
              <div className="hidden mt-1 text-xs text-white/70 max-xs:block">
                {weatherUi.currentWeather?.description}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold text-white">{weatherUi.currentTemp}°</div>
              <div className="mt-1 text-xs text-white/70 max-xs:hidden">{weatherUi.currentWeather?.description}</div>
            </div>
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <FavoriteAliasEditButton placeId={placeId} baseLabel={baseLabel} currentAlias={alias} />
            <FavoriteRemoveButton placeId={placeId} placeLabel={placeLabel} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FavoriteCard;
