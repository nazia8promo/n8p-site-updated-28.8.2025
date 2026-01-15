export const cases = [
  {
    id: "sales-ops-stabilization",
    title: "Sales Operations System Stabilization",
    summary:
      "Sales execution was transformed from fragmented activity into a controlled operating system.",

    tags: {
      industry: "B2B Services",
      stage: "Growth",
      scope: "Sales Operations"
    },

    context: {
      market:
        "B2B services company with a complex sales cycle and multiple decision-makers per deal.",
      complexity:
        "Sales activity existed, but execution lacked a unified operating owner.",
      constraints:
        "No single operating system connected demand, execution, and control."
    },

    systemProblem:
      "Sales could not be reliably controlled because demand entered chaotically, execution was activity-driven, and decisions were reactive and disconnected.",

    operatingChanges: {
      before: [
        "Sales execution driven by tasks and individual effort",
        "No operational ownership of the funnel",
        "Control existed only through reports and meetings"
      ],
      after: [
        "Sales execution became system-operated",
        "Clear ownership of sales operations was established",
        "Decision flow became explicit and repeatable"
      ]
    },

    executionLayers: {
      demand:
        "Demand operated as a controlled input into sales.",
      sales:
        "Unified qualification and execution logic across the funnel.",
      infrastructure:
        "Routing, prioritization, and operational visibility enabled by infrastructure."
    },

    outcome: [
      "Sales execution became predictable",
      "Scaling no longer increased operational noise",
      "Management gained real-time operational visibility",
      "Decisions shifted from reactive to systemic"
    ]
  },

  {
    id: "revenue-ops-alignment",
    title: "Revenue Operations Alignment",
    summary:
      "Revenue-related functions were aligned into a single operating system.",

    tags: {
      industry: "SaaS",
      stage: "Scale-up",
      scope: "Revenue Operations"
    },

    context: {
      market:
        "Subscription-based SaaS operating across multiple regions with high inbound volume.",
      complexity:
        "Marketing and sales operated as isolated functions.",
      constraints:
        "No shared revenue operating model existed."
    },

    systemProblem:
      "Revenue could not be scaled because marketing and sales were disconnected, demand quality was misaligned with execution capacity, and decisions relied on lagging indicators.",

    operatingChanges: {
      before: [
        "Marketing optimized for volume, not execution readiness",
        "Sales reacted to demand without prioritization",
        "Revenue decisions were delayed and reactive"
      ],
      after: [
        "Demand and sales operated inside a shared revenue model",
        "Qualification and routing became system-defined",
        "Revenue decisions became proactive and structured"
      ]
    },

    executionLayers: {
      demand:
        "Inbound demand structured by execution capacity.",
      sales:
        "Unified qualification and follow-up logic.",
      infrastructure:
        "Prioritization and workload balancing enabled by infrastructure."
    },

    outcome: [
      "Revenue growth became manageable",
      "Sales capacity was protected from overload",
      "Demand quality improved system-wide",
      "Revenue operations became scalable"
    ]
  }
];
