// @ts-nocheck

import * as React from "react";
import { render } from "react-dom";
import styled from "../src/theme";
import { DatePicker, Calender, RangeDatePicker, RangeCalender } from "../src";

// my favorite theme 😌
const theme = {
  backColor: "#00213E",
  // head
  headBackColor: "#00213E",
  headTitleColor: "#ffff",
  headArrowColor: "#fff",
  headRangeBackColor: "#04F5FF",
  headRangeColor: "#333",

  // weekdays color
  weekDaysColor: "#ACACAC",

  // days
  daysColor: "#fff",
  daysBackColor: "#00213E",
  holidaysColor: "#F50057",
  holidaysBackColor: "#00213E",
  daysRound: "50%",

  // start end
  startRangeBackColor: "#04F5FF",
  startRangeColor: "#000",
  endRangeBackColor: "#04F5FF",
  endRangeColor: "#000",
  continueRangeBackColor: "#014B64",
  continueRangeColor: "#fff",
  sameRangeBackColor: "#00213E",
  sameRangeColor: "#04F5FF",
  // buttons
  submitBackColor: "#04F5FF",
  submitHoverBackColor: "#014B64",
  submitColor: "#000",
  submitHoverColor: "#fff",
  cancelBackColor: "#00213E",
  cancelHoverBackColor: "#04F5FF",
  cancelColor: "#fff",
  cancelHoverColor: "#000",
};

const Row = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2em;
  padding: 2em;
  border-bottom: 2px dotted #ccc;

  .dp__input,
  .rdp__input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5em 1em;
    margin: 0.5em 0;
  }
`;

const App = () => (
  <main>
    <section>
      <h2>انتخاب تاریخ - Date Picker</h2>

      <Row>
        <DatePicker
          // timePicker={false} // to disable timePicker
          modal
          label="انتخاب تاریخ شمسی (مودال)"
          onDateChange={(date) => console.log("onDateChange", date)}
        />
        <DatePicker modal gregorian label="Gregorian DatePicker (Modal)" />
      </Row>

      <Row>
        <DatePicker
          label="انتخاب تاریخ شمسی"
          onDateChange={(date) => console.log("onDateChange", date)}
        />
        <DatePicker
          gregorian
          label="Gregorian DatePicker"
          onDateChange={(date) => console.log("onDateChange", date)}
        />
      </Row>

      <Row>
        <Calender
          label="تقویم شمسی"
          onDateChange={(date) => console.log("onDateChange", date)}
        />
        <Calender
          label="Gregorian Calendar"
          gregorian
          onDateChange={(date) => console.log("onDateChange", date)}
        />
      </Row>
    </section>
    <section>
      <h2>انتخاب بازه تاریخ - Range Date Picker</h2>

      <Row>
        <RangeDatePicker modal fromLabel="از (مودال)" toLabel="تا" />
        <RangeDatePicker
          modal
          gregorian
          fromLabel="from (modal)"
          toLabel="to"
        />
      </Row>

      <Row>
        <RangeDatePicker fromLabel="از" toLabel="تا" />
        <RangeDatePicker gregorian fromLabel="from" toLabel="to" />
      </Row>

      <Row>
        <RangeCalender
          fromLabel="از"
          toLabel="تا"
          onDateChange={(date) => console.log("onDateChange", date)}
        />

        <RangeCalender
          fromLabel="from"
          toLabel="to"
          gregorian
          onDateChange={(date) => console.log("onDateChange", date)}
        />
      </Row>
    </section>
  </main>
);

render(<App />, document.getElementById("root"));
