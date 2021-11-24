import styled from 'styled-components';

const UserGreetings = styled.span`
    max-width: calc(100% - 36px);
    height: 36px;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
`;

export default UserGreetings;
