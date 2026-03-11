# 🤖 AI Customer Support Pipeline

An **event-driven AI customer support system** that automates user query processing using microservices, semantic retrieval, and LLM-based response generation.

---

## 🔗 Links

* 🐙 **GitHub Repository:** https://github.com/mayhemking007/AI-customer-support--pipeline


---

## 🚀 Overview

This project implements an **event-driven LLM support automation pipeline** where multiple services process customer queries asynchronously.

User requests flow through services responsible for **intent classification, knowledge retrieval, and response generation**, enabling scalable and modular AI support systems.

---

## 🧱 Tech Stack

**Backend**

* Node.js
* Apache Kafka
* PostgreSQL (**pgvector**)
* OpenAI API

**Frontend**

* React.js

**Infrastructure**

* Docker
* Docker Compose
* Microservice Architecture

---

## ⚙️ Core Features

### 🔄 Event-Driven Microservice Architecture

Designed a **Kafka-based event pipeline** where services communicate through topics to process support requests asynchronously across multiple stages.

---

### 🧠 Retrieval-Augmented Response System

Integrated **pgvector-based semantic retrieval** to search internal knowledge base documents before generating LLM responses, improving response relevance and grounding.

---

### 📡 Kafka-Based Service Communication

Implemented **Kafka producers and consumers** across services using topics such as:

* `user_queries`
* `classified_queries`
* `retrieved_context`
* `generated_responses`

This enables **decoupled and scalable inter-service communication**.

---

### 🐳 Containerized Distributed Deployment

Containerized the entire system using **Docker Compose**, orchestrating:

* Kafka brokers
* PostgreSQL database
* multiple Node.js microservices

for **reproducible deployments and scalable processing**.

---

## 🎯 Key Learnings

* Designing **event-driven distributed systems**
* Implementing **Kafka-based service orchestration**
* Building **LLM-powered support automation pipelines**
* Deploying multi-service architectures using **Docker Compose**
