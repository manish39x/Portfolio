import React from "react";
import "./style.scss";

const Introduction = () => {
  return (
    <div className="border-y flex-center px-2rem w-[100vw]">
      <div className="parent-container px-[.5rem] sm:px-[2rem]">
        <div className="border-x m-auto relative py-[4rem]">
          <span className="text-white text-[14px] absolute top-[10px] left-[10px]">
            <span className="text-[greenyellow]">01 </span>INTRODUCTION
          </span>
          <div className="introduction text-[#cecece] text-[13px] sm:text-[15px] w-[94%] lg:w-[55%] m-auto">
            Hi, I'm <span className="text-[greenyellow]">Manish</span>! I build
            data pipelines — real-time streaming, batch ETL, and the
            infrastructure underneath. Currently pursuing a B.S. in Data Science
            & Applications (IIT Madras) while working hands-on with Kafka,
            Spark, dbt, and Airflow.Recent work: a real-time flight telemetry
            pipeline (OpenSky → Kafka → Databricks/Delta Lake), a billion-row
            NYC taxi pipeline (Airflow, dbt, Snowflake), and a Kafka broker
            built from scratch to actually understand what's happening under the
            hood. I like taking systems apart to see how they work, then
            building better versions.
          </div>
          <span className="text-white text-[14px] absolute bottom-[10px] right-[10px]">
            <span className="text-[greenyellow]">01 </span>INTRODUCTION
          </span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
