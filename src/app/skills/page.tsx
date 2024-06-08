'use client';

import React, { useState } from 'react';

const Skills = () => {
  const [accordionState, setAccordionState] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
  });

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="about">
      <div className="skills_texts">
        <div id="accordion-collapse" data-accordion="collapse">
          <div>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white-500 border border-b-0 border-white-200 rounded-t-xl focus:ring-4 focus:ring-white-200 dark:focus:ring-white-800 dark:border-white-700 dark:text-white-400 hover:bg-white-100 dark:hover:bg-white-800 gap-40"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={accordionState.section1}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion('section1')}
              >
                <span>Electricity</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${accordionState.section1 ? '0' : '180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${accordionState.section1 ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-white-200 dark:border-white-700">
                <p>
                Outlets, lamps, change of electrical wiring, switches, electrical installations from scratch, consumption calculations
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white-500 border border-b-0 border-white-200 rounded-t-xl focus:ring-4 focus:ring-white-200 dark:focus:ring-white-800 dark:border-white-700 dark:text-white-400 hover:bg-white-100 dark:hover:bg-white-800 gap-40"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={accordionState.section2}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion('section2')}
              >
                <span>Plumbing</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${accordionState.section2 ? '0' : '180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${accordionState.section2 ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-white-200 dark:border-white-700">
                <p>
                PVC, CPVC and copper pipe installations, common repairs, changes of toilet bowls, sinks, pumps, water tanks, faucets.                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white-500 border border-b-0 border-white-200 rounded-t-xl focus:ring-4 focus:ring-white-200 dark:focus:ring-white-800 dark:border-white-700 dark:text-white-400 hover:bg-white-100 dark:hover:bg-white-800 gap-40"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={accordionState.section3}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion('section3')}
              >
                <span>Welding</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${accordionState.section3 ? '0' : '180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${accordionState.section3 ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-white-200 dark:border-white-700">
                <p>
                Creation of doors, protections, stairs, frames, shelves, work tables and cabinets, common repairs.                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white-500 border border-b-0 border-white-200 rounded-t-xl focus:ring-4 focus:ring-white-200 dark:focus:ring-white-800 dark:border-white-700 dark:text-white-400 hover:bg-white-100 dark:hover:bg-white-800 gap-40"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={accordionState.section4}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion('section4')}
              >
                <span>Knowledged</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${accordionState.section4 ? '0' : '180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${accordionState.section4 ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-white-200 dark:border-white-700">
                <p>
                Blueprint Reading, CAD, Programmable Logic Controllers.                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white-500 border border-b-0 border-white-200 rounded-t-xl focus:ring-4 focus:ring-white-200 dark:focus:ring-white-800 dark:border-white-700 dark:text-white-400 hover:bg-white-100 dark:hover:bg-white-800 gap-40"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={accordionState.section5}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion('section5')}
              >
                <span>Programs</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${accordionState.section5 ? '0' : '180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${accordionState.section5 ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-white-200 dark:border-white-700">
                <p>
                Mastercam, Solidworks, Visualstudio, Excel, Word, Github.                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white-500 border border-b-0 border-white-200 rounded-t-xl focus:ring-4 focus:ring-white-200 dark:focus:ring-white-800 dark:border-white-700 dark:text-white-400 hover:bg-white-100 dark:hover:bg-white-800 gap-40"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={accordionState.section6}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion('section6')}
              >
                <span>Machines</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-${accordionState.section6 ? '0' : '180'} shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={`${accordionState.section6 ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-white-200 dark:border-white-700">
                <p>
                CNC Machines (Lathe, Mill), Water Jet, IDM, Electrical Machines, Manual Mill and lathe                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
