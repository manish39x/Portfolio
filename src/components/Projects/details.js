import logo from "../../assets/logo.webp";
import logo2 from "../../assets/movix-logo.png";
import logo3 from "../../assets/logo3.jpg";
import cover from "../../assets/cover.jpg";
import logo_data1 from "../../assets/logo_data1.jpg";
import logo_data2 from "../../assets/logo_data2.jpg";
import cover_data from "../../assets/cover_data.jpg";
import cover3Chat from "../../assets/chat-bg2.jpg";
export const projectData = [
  {
    name: "Nyc Taxi Pipeline",
    logo: logo_data1,
    description:
      "An end-to-end batch pipeline processing ~1 billion rows of NYC taxi trip data. Built on Airflow for orchestration and dbt for transformation, with data staged through S3, cataloged via Glue, and queried through Athena, and loaded into Snowflake via Snowpipe.",
    link: "https://github.com/manish39x/nyc-dbt-project",
    cover: cover_data,
  },
  {
    name: "Airspace Pulse — Real-Time Flight Telemetry Pipeline",
    logo: logo_data2,
    description:
      "A streaming pipeline that ingests live flight data from the OpenSky Network and processes it in real time. Data flows from OpenSky (OAuth2) through Kafka (self-hosted on EC2) into Databricks Structured Streaming, landing in a Delta Lake medallion architecture (Bronze → Silver → Gold). Includes rule-based anomaly detection for emergency squawk codes and on-ground/vertical-rate conflicts, orchestrated as a chained Databricks Job. Solved real infra problems along the way: SOCKS5 proxying around IP blocks, multi-listener Kafka configs, and availableNow trigger patterns for incremental processing. tools: Kafka Databricks PySpark Delta Lake EC2",
    link: "https://github.com/manish39x/opensky-project",
    cover: cover_data,
  },
  {
    name: "ZORO",
    logo: logo,
    description:
      "Zoro is an innovative anime streaming platform. Built on the robust MERN (MongoDB, Express.js, React.js, Node.js) stack, Zoro delivers a seamless blend of cutting-edge technology and captivating content, making it the ultimate destination for anime lovers..",
    link: "https://zoro-4i89.vercel.app/",
    cover: cover,
  },
  {
    name: "CHAT_BUCKET",
    logo: logo3,
    description:
      "Zoro is an innovative anime streaming platform. Built on the robust MERN (MongoDB, Express.js, React.js, Node.js) stack, Zoro delivers a seamless blend of cutting-edge technology and captivating content, making it the ultimate destination for anime lovers..",
    link: "https://project-chat-q7t9.onrender.com/",
    cover: cover3Chat,
  },
];
