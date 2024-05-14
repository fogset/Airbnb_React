import BarChart from "./BarChart";

function ReviewChart() {
    return (
        <div>
            <BarChart percent={99} title={5} />
            <BarChart percent={10} title={4} />
            <BarChart percent={2} title={3} />
            <BarChart percent={0} title={2} />
            <BarChart percent={1} title={1} />
        </div>
    );
}

export default ReviewChart;
