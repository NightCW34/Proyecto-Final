import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//Import Custom Components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection"; 
import TransactionSection from "../components/Transaction/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

// Card Logo Image Import
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";

//Send Money Images
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";

//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "4281900789",
      balance: 20000.15,
      alias: "Debito de trabajo",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "5867921458",
      balance: 13000.01,
      alias: "Prepago Personal",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "8794531097",
      balance: 7000.83,
      alias: "Prepago Universitaria",
      logo: logo2,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-$85.00",
      date: "15 Ago 2022",
      title: "Taxi",
      subtitle: "Uber",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-$300.00",
      date: "12 Ago 2022",
      title: "Compras",
      subtitle: "Amazon",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-$400.00",
      date: "20 Jul 2022",
      title: "Viaje",
      subtitle: "Costa Rica",
      art: {
        background: colors.primary,
        icon: "airplane",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2500.56",
      name: "Bill Gates",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "4200.53",
      name: "Samuel D Luque",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "8000.00",
      name: "Sara Moledo",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData}/>
      <TransactionSection data={transactionData}/>
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
