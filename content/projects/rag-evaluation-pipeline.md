# 🔎 Distributed Retrieval and Evaluation Pipeline

A **microservice-based RAG + LLM evaluation system** designed to retrieve information, generate answers, and automatically evaluate answer quality using asynchronous processing.

---

## 🔗 Links

* 🐙 **GitHub Repository:** https://github.com/mayhemking007/Distributed-Knowledge-Retrieval-and-Evaluation-System


---

## 🚀 Overview

This project implements a **distributed Retrieval-Augmented Generation (RAG) pipeline** with a separate **LLM evaluation system** to automatically validate answer quality and detect hallucinations.

The system is built using **microservices**, where retrieval, generation, and evaluation components communicate through internal APIs and background workers.

---

## 🧱 Tech Stack

**Backend**

* Node.js
* PostgreSQL (**pgvector**)
* Redis
* BullMQ
* OpenAI API

**Infrastructure**

* Docker
* Docker Compose
* Microservice Architecture

---

## ⚙️ Core Features

### 🧩 Microservice RAG Architecture

Designed a **microservice-based pipeline** where retrieval and evaluation services run independently and communicate through internal APIs, enabling modular system design.

---

### 🔁 Asynchronous Evaluation Pipeline

Implemented an **asynchronous LLM evaluation workflow** using **BullMQ workers**, allowing generated answers to be processed and scored in background jobs.

---

### 🧠 Semantic Retrieval & Answer Validation

Integrated **pgvector-based semantic retrieval** to fetch relevant documents and built an evaluation system to assess **groundedness and hallucination risk** of generated responses.

---

### 🐳 Containerized Deployment

Containerized all components using **Docker Compose**, orchestrating:

* API servers
* background workers
* Redis job queues
* PostgreSQL database

for **scalable and reproducible deployments**.

---

## 🎯 Key Learnings

* Designing **distributed microservice architectures**
* Implementing **asynchronous job processing with BullMQ**
* Building **LLM evaluation pipelines**
* Deploying multi-service systems using **Docker Compose**
