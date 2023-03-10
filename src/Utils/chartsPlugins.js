export const maxpoint = {
    id: 'maxpoint',
    afterDatasetDraw: (chart) => {
        const maxDataPoint = Math.max(...chart.data.datasets[0].data);
        const index = chart.data.datasets[0].data.indexOf(maxDataPoint);
        const meta = chart.getDatasetMeta(0);
        const maxDataPointCoords = meta.data[index].getCenterPoint();

        const minDataPoint = Math.min(...chart.data.datasets[0].data);
        const indexMin = chart.data.datasets[0].data.indexOf(minDataPoint);
        const metaMin = chart.getDatasetMeta(0);
        const minDataPointCoords = metaMin.data[indexMin].getCenterPoint();

        // Draw circle annotation
        const ctx = chart.ctx;
        const label = `max ${formatCash(maxDataPoint, undefined, "$")}`;
        const labelWidth = ctx.measureText(label).width;
        let labelX = maxDataPointCoords.x;
        if (maxDataPointCoords.x >= (chart.width / 2)) {
            labelX = labelX - labelWidth
        } else {
            labelX = maxDataPointCoords.x
        }
        const labelY = maxDataPointCoords.y - 10;
        ctx.fillStyle = 'rgb(156 163 175)';
        ctx.fillText(label, labelX, labelY);

        const labelMin = `min ${formatCash(minDataPoint)}`;
        const labelMinWidth = ctx.measureText(labelMin).width;
        let labelMinX = minDataPointCoords.x;
        if (minDataPointCoords.x >= (chart.width / 2)) {
            labelMinX = labelMinX - labelMinWidth
        } else {
            labelMinX = minDataPointCoords.x
        }
        const labelMinY = minDataPointCoords.y + 15;
        ctx.fillStyle = 'rgb(156 163 175)';
        ctx.fillText(labelMin, labelMinX, labelMinY);
    }
}