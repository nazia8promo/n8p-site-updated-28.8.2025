export const cases = [
  {
    id: "sales-ops-stabilization",
    title: "Sales Operations System Stabilization",
    summary:
      "Sales execution was transformed from activity-based work into an operated system.",

    tags: {
      industry: "B2B Services",
      stage: "Growth",
      scope: "Full Sales Operations"
    },

    context: {
      market: "B2B services with complex decision cycles.",
      complexity:
        "Multiple channels, long sales cycle, several stakeholders per deal.",
      constraints:
        "Existing sales team, no single operational owner, fragmented visibility."
    },

    systemProblem:
      "Sales could not be reliably controlled because demand, execution, and decision-making were not connected into a single operating system.",

    operatingChanges: {
      before: [
        "Sales execution was activity-driven",
        "Demand entered sales without operational ownership",
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
        "Demand generation operated as a controlled input layer to sales.",
      sales:
        "Sales team worked inside a unified execution and qualification model.",
      infrastructure:
        "Automation and AI supported routing, prioritization, and control."
    },

    outcome: [
      "Sales execution became predictable",
      "Scaling stopped increasing operational noise",
      "Management gained operational visibility",
      "Decisions shifted from reactive to systemic"
    ]
  },

  // 🔹 CONTRAST CASE
  {
    id: "revops-alignment-enablement",
    title: "Revenue Operations Alignment",
    summary:
      "Disconnected revenue functions were aligned into a single operating model.",

    tags: {
      industry: "SaaS",
      stage: "Scale",
      scope: "Revenue Enablement"
    },

    context: {
      market: "Subscription-based SaaS operating across multiple regions.",
      complexity:
        "High inbound volume, short sales cycles, multiple acquisition channels.",
      constraints:
        "Fast growth, overloaded sales team, marketing-led demand."
    },

    systemProblem:
      "Revenue could not be scaled because demand generation and sales execution operated as isolated functions without a shared operating model.",

    operatingChanges: {
      before: [
        "Marketing optimized for volume, not execution readiness",
        "Sales reacted to demand without prioritization",
        "Revenue decisions were based on lagging indicators"
      ],
      after: [
        "Demand and sales operated inside a shared revenue model",
        "Qualification and routing became system-defined",
        "Revenue decisions became proactive and structured"
      ]
    },

    executionLayers: {
      demand:
        "Inbound demand was structured and routed based on execution capacity.",
      sales:
        "Sales execution followed a unified qualification and follow-up logic.",
      infrastructure:
        "Automation and AI supported prioritization and workload balancing."
    },

    outcome: [
      "Revenue growth became manageable",
      "Sales capacity was protected from overload",
      "Demand quality improved system-wide",
      "Revenue operations became scalable"
    ]
  }
];