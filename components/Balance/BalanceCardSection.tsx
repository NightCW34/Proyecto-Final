import React, { FunctionComponent} from 'react';
import styled from 'styled-components/native';

//Components
import BalanceCard from "./BalanceCards"

const BalanceCardSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 2;
`;

//Types
import { BalanceCardProps } from './types';

const BalanceCardSection: FunctionComponent<BalanceCardProps> = (props) => {
    return (
        <BalanceCardSectionBackground>
            <BalanceCard {...props}/>
        </BalanceCardSectionBackground>
    );
};

export default BalanceCardSection;