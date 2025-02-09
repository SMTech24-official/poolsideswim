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
      "We offer swimming lessons year-round in our temperature-controlled indoor pools. You can enroll your child at any time, and our flexible scheduling system allows you to choose from morning, afternoon, and evening sessions to best fit your schedule.",
  },
  {
    question: "How long are swim lessons?",
    answer:
      "Our standard swim lessons are 30 minutes long, which we've found to be the optimal duration for maintaining children's attention and energy levels. We offer both group and private lessons, with programs typically running in 8-week sessions.",
  },
  {
    question: "What training do your instructors receive?",
    answer:
      "All our instructors are certified lifeguards and undergo comprehensive training in our teaching methodology. They are required to maintain current CPR and First Aid certifications, and participate in regular professional development to stay updated on the latest teaching techniques.",
  },
  {
    question: "Will my child have the same instructor for every lesson?",
    answer:
      "We strive to maintain consistency by assigning the same instructor to your child's lessons whenever possible. This helps build trust and familiarity, which are essential for effective learning. However, all our instructors are trained in our standardized teaching methods.",
  },
];

const Faq = () => {
  return (
    <div className="container grid lg:grid-cols-2 gap-6 items-start">
      <SectionHeader
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
