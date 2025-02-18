"use client";

import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { Collapse } from "antd";

import styles from "./faq.module.css";

const { Panel } = Collapse;

const faqs = [
  {
    question: "What age can my child start swimming lessons?",
    answer:
      "Your child can start swimming lessons as early as six months old. Our classes focus on water safety and building confidence. As your child grows, we offer age-appropriate lessons to develop their skills. Each lesson is designed to help them progress at their own pace.",
  },
  {
    question: "What time of year can I enroll my child in swim lessons?",
    answer:
      "Poolside Swimming is a season company working only in the summer month however, you can book your spot any in advance any time of year.",
  },
  {
    question: "How long are swim lessons?",
    answer:
      "Classes are 30 minutes in duration per day.  Bronze Medallion and Bronze Cross classes are 90 minutes in duration per day.",
  },
  {
    question: "What training do your instructors receive?",
    answer: "All instructors are certified by the Lifesaving Society",
  },
  {
    question: "Will my child have the same instructor for every lesson?",
    answer:
      "Yes your child will have the same instructor every lesson.   However, in rare situations you may have a different instructor",
  },
  {
    question: "What if it rains?",
    answer:
      "The Instructor is the one who determine a 'rain day' and if the class will be rescheduled, not the client. Rain days will be made up at at the earliest convenience of the instructor",
  },
  {
    question: "Does Poolside Swimming run classes on the holidays?",
    answer:
      "Poolside Swimming will conduct classes on the Civic Holidays of July and August.  If the client cancels or misses the class it is not the responsibility of Poolside Swimming to make up the missed class.",
  },
  {
    question: "What is the pool temperature at your pool?",
    answer: "86 to 88F or 30 to 32C",
  },
  {
    question: "Can I do a Semi Private Class?",
    answer:
      "Yes you can but the students must be at the same levels.   There is an additional charge per student.  This does not apply to Bronze Level Courses.",
  },
];

const Faq = () => {
  return (
    <div className="container grid gap-10 items-start">
      <SectionHeader
        classes="text-center"
        title="Frequently asked question"
        subTitle="Find answers to common questions about our services, bookings, and policies. If you don’t see what you’re looking for, feel free to contact us—we’re here to help!"
      />
      <Collapse
        accordion
        className={styles.faqCollapse}
        expandIconPosition="end"
        expandIcon={({ isActive }) => (
          <span className={styles.expandIcon}>{isActive ? "-" : "+"}</span>
        )}
      >
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index} className={styles.faqPanel}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Faq;
