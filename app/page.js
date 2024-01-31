"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodWrap from "@/component/Todo/FoodWrap";
import CalcWrap from "@/component/Form/Calc/CalcWrap";
import TodoWrap from "@/component/TodoNew/TodoWrap";
import { Col, Container, Row } from "react-bootstrap";
import Todotestwrap from "@/component/TodoTest/Todotestwrap";
import Todotaskwrap from "@/component/Todo1/Todotaskwrap";
import PostPage from "@/component/Post/PostPage";
import TodoWorld from "@/component/TodoWorld/TodoWorld";

import { useState } from "react";
import { createContext } from "react";

import ComponentB from "@/component/ComponentB";
import ComponentA from "@/component/ComponentA";
import Form from "@/component/Form/Form";
import FormWithYup from "@/component/Form/FormWithYup";
import MainTab from "@/component/MainTab";

export default function Home() {
  return (
    <main>


      <Container fluid className="px-0">
        <Row>
          <Col className="col-12 mx-auto">

            <MainTab/>
           
          
          </Col>
        </Row>
      </Container>
    </main>
  );
}
