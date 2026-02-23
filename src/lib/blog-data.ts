export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  categoryColor: string
  readTime: string
  author: {
    name: string
    role: string
    initials: string
  }
  content: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-production-ready-agentic-ai",
    title: "Building Production-Ready Agentic AI Systems",
    excerpt:
      "Moving from prototype to production with agentic AI requires more than prompt engineering. Here are the lessons we've learned deploying enterprise-grade AI systems across industries.",
    date: "2025-12-15",
    category: "Agentic AI",
    categoryColor: "bg-primary/10 text-primary",
    readTime: "8 min read",
    author: {
      name: "Rajarajan Pudupatti",
      role: "CEO, Moring AI",
      initials: "RP",
    },
    content: [
      "The gap between a working AI prototype and a production-grade system is enormous. In our experience deploying agentic AI across Fortune 500 enterprises, the prototype typically represents about 10% of the total effort. The remaining 90% involves reliability engineering, error handling, observability, and integrating with existing enterprise systems.",
      "Agentic AI systems differ fundamentally from traditional AI pipelines. Instead of a single model call, you're orchestrating multiple agents that make decisions, take actions, and coordinate with each other. This introduces complexity around state management, error recovery, and human-in-the-loop workflows that most teams underestimate.",
      "At Moring AI, we've developed a platform-first approach that addresses these challenges. Our Agentic AI Platform provides the infrastructure primitives — RAG pipelines, model gateways, agent observability, and MCP servers — that let teams focus on business logic rather than plumbing.",
      "The key insight is that production AI systems need the same rigor as production software systems. You need CI/CD for model deployments, observability for agent behavior, cost controls for inference spending, and security guardrails for data access. Our platform bakes these in from day one.",
      "Forward-deployed engineering is our secret weapon. Instead of handing off a platform and hoping for the best, our engineers embed directly with customer teams. They bring deep AI expertise combined with the ability to understand and navigate complex enterprise environments.",
      "The result is dramatically faster time-to-value. What typically takes enterprises 12-18 months to build internally, we deliver in 8-12 weeks. And because our platform is composable, each new use case builds on the infrastructure from previous ones.",
    ],
    featured: true,
  },
  {
    slug: "composable-ai-platform-approach",
    title: "The Composable AI Platform Approach",
    excerpt:
      "Why monolithic AI platforms fail at enterprise scale, and how a composable architecture delivers better outcomes faster.",
    date: "2025-11-28",
    category: "Platform",
    categoryColor: "bg-blue-50 text-blue-600",
    readTime: "6 min read",
    author: {
      name: "Balaji Nagaraj",
      role: "Chief AI Officer",
      initials: "BN",
    },
    content: [
      "Enterprise AI platforms face a fundamental tension: they need to be comprehensive enough to handle diverse use cases, yet flexible enough to integrate with existing infrastructure. Monolithic platforms try to solve this by doing everything, but end up doing nothing well.",
      "The composable approach is different. Instead of a single, all-encompassing platform, we provide specialized components that work together. RAG Pipelines handle document processing. The AI Gateway manages model routing and cost optimization. Agent Observability provides visibility into system behavior.",
      "Each component is production-grade on its own, but the real power comes from composition. When you combine our RAG Pipelines with the AI Gateway and Agent Observability, you get a complete agentic document processing system that's more capable and more maintainable than any monolithic alternative.",
      "This approach also respects enterprise reality. Most organizations already have investments in cloud infrastructure, observability tools, and security frameworks. Our components integrate with what's already there rather than requiring wholesale replacement.",
      "The composable architecture has another advantage: it enables incremental adoption. Teams can start with a single component — say, the AI Gateway for model management — and expand to the full platform as their needs grow. There's no big-bang deployment required.",
    ],
    featured: false,
  },
  {
    slug: "document-processing-at-scale",
    title: "Document Processing at Scale with AI Agents",
    excerpt:
      "How agentic AI transforms document processing from a bottleneck into a competitive advantage for finance and insurance companies.",
    date: "2025-11-10",
    category: "Document AI",
    categoryColor: "bg-emerald-50 text-emerald-600",
    readTime: "7 min read",
    author: {
      name: "Srini Kolusu",
      role: "COO, Moring AI",
      initials: "SK",
    },
    content: [
      "Document processing is the unglamorous backbone of finance and insurance operations. Claims documents, underwriting submissions, compliance filings — billions of documents flow through these industries every year, and most are still processed manually or with brittle rule-based systems.",
      "Traditional OCR and extraction tools solve only part of the problem. They can pull text from a PDF, but they can't understand context, apply business rules, or handle exceptions. The result is high error rates, expensive human review, and persistent backlogs.",
      "Agentic AI transforms this equation. Instead of a single extraction model, our approach uses coordinated AI agents that classify documents, extract relevant fields, validate against business rules, and route exceptions to the right human reviewers.",
      "The human-in-the-loop design is critical. Our agents don't try to replace human judgment — they augment it. When an agent encounters uncertainty, it escalates to a human reviewer with all relevant context, making the review process faster and more accurate.",
      "Results from our deployments speak for themselves: 80% reduction in manual processing time, 95%+ accuracy on extraction tasks, and cycle times measured in minutes rather than days. The key is not just AI capability, but the platform infrastructure that makes it reliable at scale.",
    ],
    featured: false,
  },
  {
    slug: "reducing-mttr-ai-incident-investigation",
    title: "Reducing MTTR with AI-Powered Incident Investigation",
    excerpt:
      "How production operations teams are using agentic AI to cut mean time to resolution from hours to minutes.",
    date: "2025-10-22",
    category: "Production AI",
    categoryColor: "bg-purple-50 text-purple-600",
    readTime: "5 min read",
    author: {
      name: "Rajarajan Pudupatti",
      role: "CEO, Moring AI",
      initials: "RP",
    },
    content: [
      "Alert fatigue is the silent killer of production operations. When on-call engineers receive hundreds of alerts per shift, they inevitably start ignoring them. The result: critical incidents get buried in noise, and mean time to detection (MTTD) suffers.",
      "Our AI for Production Ops solution attacks this problem at its root. Instead of adding another layer of alert filtering, we deploy agentic AI that actively investigates every alert. Each investigation pulls logs, metrics, traces, recent changes, and runbook knowledge to surface the likely root cause.",
      "The investigation report is delivered directly in Slack, formatted for quick human review. The on-call engineer doesn't need to context-switch between ten different tools — the agent has already done that work and synthesized the findings.",
      "Integration with existing observability tools is seamless. Our agents work with Datadog, PagerDuty, Grafana, New Relic, and most major platforms out of the box. There's no need to replace your existing stack — we enhance it.",
      "Early results from production deployments show 60% reduction in MTTR and significant improvement in engineer satisfaction. Teams report spending less time on repetitive investigation and more time on meaningful engineering work.",
    ],
    featured: false,
  },
  {
    slug: "forward-deployed-engineering-model",
    title: "Forward-Deployed Engineering: Our Secret Weapon",
    excerpt:
      "Why embedding engineers directly with customer teams produces better AI outcomes than traditional consulting or SaaS models.",
    date: "2025-10-05",
    category: "Engineering",
    categoryColor: "bg-amber-50 text-amber-600",
    readTime: "6 min read",
    author: {
      name: "Balaji Nagaraj",
      role: "Chief AI Officer",
      initials: "BN",
    },
    content: [
      "The traditional enterprise AI engagement model is broken. Consulting firms deliver strategies and decks but struggle with implementation. SaaS platforms provide tools but lack the context to make them work in specific enterprise environments. The gap between AI potential and AI reality persists.",
      "Forward-deployed engineering bridges this gap. Every Moring AI engineer is trained to embed directly with customer teams, understanding their data, their workflows, and their constraints. This isn't staff augmentation — it's a fundamentally different model of AI delivery.",
      "The forward-deployed engineer brings two things that no platform or strategy deck can provide: deep AI expertise and contextual understanding. They can see where AI will add value, identify the data and integration challenges, and build solutions that actually work in the customer's environment.",
      "This model also enables rapid iteration. Instead of months-long requirements gathering and specification, forward-deployed engineers can prototype, test, and refine solutions in weeks. The tight feedback loop between building and deploying accelerates learning and improves outcomes.",
      "Combined with our platform infrastructure, forward-deployed engineering creates a powerful flywheel. Each engagement improves our platform components, which makes the next engagement faster and more effective. It's a model that compounds over time.",
    ],
    featured: false,
  },
  {
    slug: "sme-workbench-empowering-experts",
    title: "The SME Workbench: Empowering Business Experts",
    excerpt:
      "How we put business domain experts in control of AI systems without requiring engineering expertise.",
    date: "2025-09-18",
    category: "Platform",
    categoryColor: "bg-blue-50 text-blue-600",
    readTime: "5 min read",
    author: {
      name: "Srini Kolusu",
      role: "COO, Moring AI",
      initials: "SK",
    },
    content: [
      "The biggest bottleneck in enterprise AI isn't technology — it's the gap between business expertise and technical implementation. Subject matter experts (SMEs) understand the nuances of their domain, but they can't configure AI systems. Engineers can build AI systems, but they lack domain knowledge.",
      "Our SME Workbench eliminates this bottleneck. It provides intuitive tools that let business experts configure, evaluate, and improve AI systems directly — without writing code or filing engineering tickets.",
      "The Workbench includes visual rule builders for business logic, evaluation dashboards for quality monitoring, and feedback mechanisms for continuous improvement. SMEs can define extraction schemas, set validation rules, review edge cases, and tune system behavior — all through a purpose-built interface.",
      "The result is faster iteration and higher quality. When an SME notices that the system is misclassifying a document type, they can add a rule or provide feedback immediately, rather than waiting for an engineering sprint. This tight feedback loop is essential for AI systems that need to handle real-world complexity.",
      "We've seen dramatic improvements in system accuracy and adoption when SMEs are empowered to participate directly. It's not just a better tool — it's a better model for how AI systems should be built and maintained in enterprises.",
    ],
    featured: false,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}
