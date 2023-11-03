import type { EChartsOption } from "echarts";
import type { CartesianChartModel } from "metabase/visualizations/echarts/cartesian/model/types";
import { buildEChartsSeries } from "metabase/visualizations/echarts/cartesian/option/series";
import type {
  ComputedVisualizationSettings,
  RenderingContext,
} from "metabase/visualizations/types";
import { buildAxes } from "metabase/visualizations/echarts/cartesian/option/axis";
import { getAxesFormatters } from "metabase/visualizations/echarts/cartesian/option/format";

import { getChartGrid } from "./grid";
import { getGoalLineEChartsSeries } from "./goal-line";

export const getCartesianChartOption = (
  chartModel: CartesianChartModel,
  settings: ComputedVisualizationSettings,
  renderingContext: RenderingContext,
): EChartsOption => {
  const dataSeries = buildEChartsSeries(chartModel, settings, renderingContext);
  const goalLineSeries = getGoalLineEChartsSeries(settings, renderingContext);

  const axesFormatters = getAxesFormatters(
    chartModel,
    settings,
    renderingContext,
  );

  const dimensions = [
    chartModel.dimensionModel.dataKey,
    ...chartModel.seriesModels.map(seriesModel => seriesModel.dataKey),
  ];
  const echartsDataset = [
    { source: chartModel.transformedDataset, dimensions },
  ];

  return {
    grid: getChartGrid(settings),
    dataset: echartsDataset,
    series: [goalLineSeries, ...dataSeries],
    ...buildAxes(chartModel, settings, axesFormatters, renderingContext),
  } as EChartsOption;
};
