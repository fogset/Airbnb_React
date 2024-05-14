import styled from "styled-components";

function BarChart({ percent, title }) {
    return (
        <Container>
            {title}
            <BarWidthContainer>
                <BarWidthBackground>
                    <BarWidth style={{ width: `${percent}%` }} />
                </BarWidthBackground>
            </BarWidthContainer>
        </Container>
    );
}

export default BarChart;
const BarWidthContainer = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;
const BarWidthBackground = styled.div`
    width: 180px;
    height: 5px;
    background-color: #dddddd;
    z-index: 9;
`;
const BarWidth = styled.div`
    height: 5px;
    background-color: #222222;
    z-index: 10;
`;
const Container = styled.div`
    display: flex;
    margin-bottom: 5px;
    font-size: 15px;
`;
