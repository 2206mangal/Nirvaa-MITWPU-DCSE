export interface Course {
    code: string;
    title: string;
    shortTitle: string;
    category: string;
    categoryColor: string;
    credits: number;
    ltp: string;
    instructors: string;
    scheme: string;
    standards?: string;
    focus?: string;
    rationale: string;
    units: { title: string; description: string }[];
    labDeliverables?: string[];
  }
  
  export interface FacultyMember {
    name: string;
    title: string;
    organization: string;
    qualification: string;
    experience: string;
    specialization: string;
  }
  
  export interface LeadershipMember {
    name: string;
    designation: string;
    role: string;
  }
  
  export interface SalaryTier {
    experience: string;
    preRole: string;
    preSalary: string;
    postRole: string;
    postSalary: string;
  }
  
  export const programInfo = {
    name: 'Data Centre Systems Engineering',
    degree: 'M.Tech DCSE',
    university: 'Dr. Vishwanath Karad MIT World Peace University, Pune',
    universityShort: 'MIT-WPU',
    industryPartner: 'NIRVAA Solution Pvt. Ltd.',
    school: 'School of Engineering & Technology (SoET)',
    department: 'Department of Computer Science Engineering',
    academicYear: '2026–27',
    deliveryModel: 'Weekend-Intensive (Fri–Sun)',
    timeRange: '08:30 AM – 06:45 PM',
    campus: 'MIT-WPU Kothrud Campus, Pune',
    classrooms: 'VT-303 & VY-003',
    weeklyHours: 26,
    totalCredits: 21,
    docRef: 'MIT-WPU/DCSE/2026-27/A-Z-GUIDE',
    status: 'Active Academic Cohort (FY M.Tech DCSE)',
    tagline: "Don't just watch the AI Revolution — Engineer its Physical Foundation.",
  };
  
  export const stats = [
    { value: 100, suffix: '+ kW', label: 'Per AI Server Rack', sub: 'High-density GPU clusters (H100, H200, Blackwell B200)' },
    { value: 2000, suffix: '+ MW', label: 'India Capacity by 2027', sub: 'Expanding from ~800 MW — a 2.5× surge' },
    { value: 10, prefix: '$', suffix: 'B+', label: 'Capital Investment', sub: 'Direct foreign and domestic infrastructure investment' },
    { value: 70, suffix: '%+', label: 'Talent Deficit', sub: 'Of operators report a shortage of qualified engineers' },
  ];
  
  export const talentGap = [
    {
      group: 'Computer Science & IT Graduates',
      icon: 'monitor',
      has: ['High-level coding', 'OS concepts', 'Public cloud dashboards'],
      lacks: ['33kV utility substations', 'HT/LT vacuum circuit breakers', 'Thermal PUE optimization', 'Liquid immersion cooling loops', 'Modbus/BACnet protocols'],
    },
    {
      group: 'Electrical & Mechanical Graduates',
      icon: 'zap',
      has: ['HVAC systems', 'Power transformers', 'Chiller operations'],
      lacks: ['Distributed object storage', 'Software-defined networking (SDN)', 'NVMe-over-Fabrics (NVMe-oF)', 'Zero-downtime clustering'],
    },
    {
      group: 'DCSE Hybrid Engineer',
      icon: 'layers',
      has: ['Full physical facility mastery', 'Hyperscale cloud architecture', 'Distributed storage systems', 'Liquid cooling thermodynamics', 'Mission-critical reliability'],
      lacks: [],
      isBridge: true,
    },
  ];
  
  export const leadership: LeadershipMember[] = [
    { name: 'Prof. Dr. Siddharth S. Chakrabarti', designation: 'Dean, SoET, MIT-WPU', role: 'Executive patron, academic governance, university resource allocation, and quality assurance.' },
    { name: 'Prof. Dr. B. M. Patil', designation: 'Program Director, DoME / PG Programs, MIT-WPU', role: 'Executive director overseeing postgraduate academic delivery, examinations, and university administration.' },
    { name: 'Dr. M. D. Hambarde', designation: 'PG Program Coordinator, CSE, MIT-WPU', role: 'Program coordinator, research methodology faculty advisor, and liaison between MIT-WPU and NIRVAA.' },
    { name: 'Dr. Jagdish Shinde', designation: 'Managing Director, NIRVAA (Ph.D, 25+ Yrs)', role: 'Industry co-architect of the curriculum, executive advisor, and faculty for holistic leadership and data center strategy.' },
    { name: 'Mr. Anup Goel', designation: 'Director, NIRVAA (20+ Yrs)', role: 'Industry advisor for high-voltage power networks, electrical reliability, and Tier-IV facility operations.' },
    { name: 'Dr. Vivekanand M. Bankolli', designation: 'Asst. General Manager, NIRVAA (Ph.D, 30+ Yrs)', role: 'Lead faculty for Advance Data Centre & Cloud Infrastructure Engineering (ADC & CIE).' },
  ];
  
  export const courses: Course[] = [
    {
      code: 'CDS40010',
      title: 'Advance Data Centre & Cloud Infrastructure Engineering (ADC & CIE)',
      shortTitle: 'ADC & CIE',
      category: 'Core Tech',
      categoryColor: 'emerald',
      credits: 4,
      ltp: '3L : 0T : 2P',
      instructors: 'Dr. Vivekanand M. Bankolli (Ph.D, 30+ yrs) & Mr. Siddu Patil (15+ yrs)',
      scheme: 'TL3 (Theory + Practical Lab)',
      standards: 'TIA-942, Uptime Tier I-IV, ASHRAE TC 9.9',
      rationale: 'Covers the entire physical engineering infrastructure supporting mission-critical digital workloads, spanning high-voltage power networks, precision thermodynamics, liquid cooling, and automated telemetry.',
      units: [
        { title: 'Facility Architecture & Uptime Standards', description: 'TIA-942 and Uptime Institute Tier classifications (Tier I to Tier IV); concurrent maintainability, fault tolerance, 2(N+1) redundancy, seismic zoning, fire barrier compartmentalization, physical perimeter security, and continuous cooling requirements.' },
        { title: 'Mission-Critical Power Delivery', description: 'Utility grid interfaces (11kV / 33kV), step-down transformers, HT/LT vacuum circuit breakers, busducts, Static Transfer Switches (STS), Power Distribution Units (PDUs), static UPS systems (double conversion online), Dynamic Rotary UPS (DRUPS), diesel generators, and battery chemistries (VRLA vs. Lithium-ion BESS).' },
        { title: 'Precision Thermodynamics & Liquid Immersion Cooling', description: 'ASHRAE TC 9.9 thermal envelopes, Power Usage Effectiveness (PUE) and Carbon Usage Effectiveness (CUE) optimization; CRAC/CRAH/PAHU operation, hot/cold aisle containment, direct-to-chip cold plates, and single/two-phase dielectric immersion cooling for 80kW+ AI racks.' },
        { title: 'IBMS, DCIM & Facility Automation', description: 'Integrated Building Management Systems (IBMS), environmental telemetry, Modbus RTU/TCP, BACnet, and SNMP integration, VESDA early warning smoke detection, clean-agent suppression (Novec 1230, FM-200), and water leak detection ropes.' },
      ],
      labDeliverables: [
        'Modbus sensor calibration',
        'Thermal mapping with infrared cameras',
        'Automated chiller failover scenarios',
        'Real-time PUE calculation dashboards',
      ],
    },
    {
      code: 'CDS40020',
      title: 'Advanced Cloud Computing & Data Storage System (ACC & DSS)',
      shortTitle: 'ACC & DSS',
      category: 'Cloud Core',
      categoryColor: 'rose',
      credits: 4,
      ltp: '3L : 0T : 2P',
      instructors: 'Mr. Vivekanand P. Navadagi (Cloud Architect, Ph.D pursuing, 15+ yrs)',
      scheme: 'TL3 (Theory + Practical Lab)',
      standards: 'Hyperscale Storage, NVMe-oF, Ceph, SDN',
      rationale: 'Architect enterprise-grade distributed storage fabrics, hyperscale software-defined networks, and multi-region disaster recovery systems guaranteeing zero data loss.',
      units: [
        { title: 'Hyperscale Storage Architectures', description: 'Block, File, and Object storage topologies; SAN/NAS storage fabrics, Fibre Channel, iSCSI protocols, NVMe-over-Fabrics (NVMe-oF) over RDMA (RoCEv2), and extreme throughput caching layers.' },
        { title: 'Software-Defined & Distributed Storage', description: 'Ceph architecture in depth (CRUSH map algorithm, OSDs, MONs, MDS, RADOS), MinIO distributed object storage, Erasure Coding (Reed-Solomon schemes) vs multi-replica consistency tradeoffs.' },
        { title: 'Software-Defined Networking (SDN) & Overlays', description: 'Spine-leaf CLOS network architectures, OpenFlow, VXLAN overlays, BGP-EVPN control planes, network micro-segmentation, and low-latency East-West packet flow optimization.' },
        { title: 'High Availability, DR & Consensus', description: 'Distributed consensus algorithms (Paxos, Raft), split-brain protection, multi-region asynchronous replication, Recovery Point Objective (RPO) and Recovery Time Objective (RTO) engineering, and zero-downtime clustering.' },
      ],
      labDeliverables: [
        'Provisioning a multi-node Ceph cluster',
        'Benchmarking IOPS with fio',
        'Configuring NVMe-oF endpoints',
        'Simulating live network link failure injection',
      ],
    },
    {
      code: 'CDS40030',
      title: 'Project Lab-I (Live Infrastructure Simulations)',
      shortTitle: 'Project Lab-I',
      category: 'Capstone Lab',
      categoryColor: 'slate',
      credits: 2,
      ltp: '0L : 0T : 4P',
      instructors: 'Mr. Subodh B. Patil (15+ yrs), Mr. Abhishek Joshi (13+ yrs) — Lab Asst: Mr. Pranav Biradar',
      scheme: 'PJ (Practical Capstone Project Evaluation)',
      rationale: 'A dedicated 4-hour uninterrupted Saturday afternoon laboratory block where students apply physical and software engineering theories to live hardware simulations, IBMS telemetry dashboards, and crisis response scenarios.',
      units: [
        { title: 'Physical Sensor Instrumentation', description: 'Wiring, reading, and polling Modbus/BACnet temperature, humidity, and flow sensors into industrial IoT gateways.' },
        { title: 'Dynamic Load Balancing', description: 'Configuring automated rack load shedding when secondary power supplies trip during simulated utility blackouts.' },
        { title: 'Thermal Runaway Injection Drills', description: 'Simulating CRAC cooling pump failure, measuring thermal rise curves across rack heights, and activating secondary containment doors.' },
        { title: 'DCIM Dashboard Engineering', description: 'Building Grafana, Prometheus, and InfluxDB telemetry portals that ingest real-time data center metrics.' },
      ],
    },
    {
      code: 'MEC50010',
      title: 'Advanced Mathematics for Distributed Systems',
      shortTitle: 'Advanced Mathematics',
      category: 'Core Math',
      categoryColor: 'indigo',
      credits: 4,
      ltp: '3L : 1T : 0P',
      instructors: 'Dr. Ganesh Birajdar (Professor, Ph.D, MIT-WPU)',
      scheme: 'TT1 (Theory + Tutorial Tests)',
      rationale: 'Stochastic modeling, probability distributions, discrete and continuous-time Markov chains, queuing theory (M/M/1, M/M/k, G/G/1 queue dynamics) for analyzing cloud request buffering, graph theory for optimal network routing, and min-cost max-flow optimization.',
      units: [],
    },
    {
      code: 'MEC51050',
      title: 'Research Methodology for Engineers',
      shortTitle: 'Research Methodology',
      category: 'Research',
      categoryColor: 'fuchsia',
      credits: 4,
      ltp: '3L : 1T : 0P',
      instructors: 'Dr. M. D. Hambarde (PG Coordinator) & Dr. Vitthal Gutte (Ph.D, MIT-WPU)',
      scheme: 'TT1 (Theory + Research Proposal)',
      rationale: 'Engineering research philosophy, formulation of experimental infrastructure hypotheses, rigorous quantitative benchmarking, patent drafting and intellectual property rights, IEEE/ACM publication standards, and high-impact infrastructure benchmarking.',
      units: [],
    },
    {
      code: 'PCE10040',
      title: 'Scientific Studies of Mind, Matter, Spirit and Consciousness',
      shortTitle: 'Studies of Mind & Matter',
      category: 'Peace / Leadership',
      categoryColor: 'sky',
      credits: 2,
      ltp: '2L : 0T : 0P',
      instructors: 'Dr. Jagdish Shinde & Mr. Shashidhar Ramesh',
      scheme: 'Theory',
      rationale: 'Exploration of cognitive resilience, stress management during 24×7 mission-critical operations, ethical tech governance, and emotional intelligence for engineering executives.',
      units: [],
    },
    {
      code: 'YOG10030',
      title: 'Yoga & Wellness Practice',
      shortTitle: 'Yoga & Wellness',
      category: 'Wellness',
      categoryColor: 'cyan',
      credits: 1,
      ltp: '0L : 0T : 2P',
      instructors: 'Mr. Yatharth Verma & Dr. Jagdish Shinde',
      scheme: 'Practical',
      rationale: 'Pranayama, ergonomic posture correction, and breathwork protocols engineered to sustain peak executive focus and physical endurance during long engineering shifts.',
      units: [],
    },
  ];
  
  export const faculty: FacultyMember[] = [
    { name: 'Dr. Jagdish Shinde', title: 'Managing Director', organization: 'NIRVAA', qualification: 'Ph.D', experience: '25+ Yrs', specialization: 'Data Centre Strategy, Holistic Leadership & Mindfulness' },
    { name: 'Mr. Anup Goel', title: 'Director', organization: 'NIRVAA', qualification: 'PG Dip, B.E.', experience: '20+ Yrs', specialization: 'Electrical Infrastructure & Data Centre Technology' },
    { name: 'Dr. Vivekanand M. Bankolli', title: 'Asst. General Manager', organization: 'NIRVAA', qualification: 'Ph.D', experience: '30+ Yrs', specialization: 'Data Centre Architecture, Thermal Envelopes & Power Subsystems' },
    { name: 'Mr. Siddu Patil', title: 'IT Head', organization: 'NIRVAA', qualification: 'Ph.D (Pursuing), M.Tech', experience: '15+ Yrs', specialization: 'Data Centre Operations, Telemetry & Data Engineering' },
    { name: 'Mr. Vivekanand P. Navadagi', title: 'Cloud Architect', organization: 'NIRVAA', qualification: 'Ph.D (Pursuing), M.Tech', experience: '15+ Yrs', specialization: 'Cloud Storage Systems, Ceph, NVMe-oF & Distributed Networks' },
    { name: 'Mr. Subodh B. Patil', title: 'Project Manager', organization: 'NIRVAA', qualification: 'Ph.D (Pursuing), M.Tech', experience: '15+ Yrs', specialization: 'Cloud Computing, Infrastructure Projects & Project Lab-I' },
    { name: 'Mr. Rahul P. Suryavanshi', title: 'Technical Manager', organization: 'NIRVAA', qualification: 'M.Tech', experience: '15+ Yrs', specialization: 'Data Analytics, Telemetry Analysis & Data Engineering' },
    { name: 'Mr. Vaman B. Chavan', title: 'Senior Technical Lead', organization: 'NIRVAA', qualification: 'M.Tech', experience: '14+ Yrs', specialization: 'Data Analytics & Distributed Infrastructure Telemetry' },
    { name: 'Mr. Abhishek Joshi', title: 'IBMS Manager', organization: 'NIRVAA', qualification: 'B.E.', experience: '13+ Yrs', specialization: 'IBMS Building Automation, Sensor Telemetry & Facility Control' },
    { name: 'Mr. Pranav Biradar', title: 'Trainee Engineer', organization: 'NIRVAA', qualification: 'B.E.', experience: '1+ Yrs', specialization: 'Cloud Platforms, Full Stack & Laboratory Assistance' },
    { name: 'Dr. Ganesh Birajdar', title: 'Professor', organization: 'MIT-WPU', qualification: 'Ph.D', experience: '15+ Yrs', specialization: 'Advanced Mathematics, Queuing Theory & Stochastic Processes' },
    { name: 'Dr. M. D. Hambarde', title: 'PG Program Coordinator', organization: 'MIT-WPU', qualification: 'Ph.D', experience: '20+ Yrs', specialization: 'Computer Science Engineering & Research Methodology' },
    { name: 'Dr. Vitthal Gutte', title: 'Professor', organization: 'MIT-WPU', qualification: 'Ph.D', experience: '18+ Yrs', specialization: 'Research Methodology, Publications & IP Strategy' },
    { name: 'Mr. Yatharth Verma', title: 'Yoga Teacher', organization: 'NIRVAA', qualification: 'B.Tech', experience: '20+ Yrs', specialization: 'Executive Physical Wellness & Stress Management' },
    { name: 'Mr. Shashidhar Ramesh', title: 'Yoga & Leadership Faculty', organization: 'NIRVAA', qualification: 'B.E., PGDBA', experience: '23+ Yrs', specialization: 'Scientific Consciousness Studies & Cognitive Resilience' },
  ];
  
  export const salaryTiers: SalaryTier[] = [
    { experience: '0 – 2 Years', preRole: 'Junior SysAdmin, Desktop Support, Trainee', preSalary: '₹4.2 – 5.5 LPA', postRole: 'Data Center Facility Operations Engineer, Cloud Systems Trainee', postSalary: '₹15.0 – 18.5 LPA' },
    { experience: '3 – 5 Years', preRole: 'Systems Admin, Cloud Ops Engineer, QA', preSalary: '₹6.8 – 8.5 LPA', postRole: 'Tier-IV Data Center Commissioning Lead, Distributed Storage Specialist', postSalary: '₹22.0 – 26.5 LPA' },
    { experience: '6 – 8 Years', preRole: 'Senior Systems Engineer, DevOps Engineer', preSalary: '₹10.5 – 12.5 LPA', postRole: 'Hyperscale Infrastructure Architect, Thermal PUE Optimization Lead', postSalary: '₹31.0 – 35.5 LPA' },
    { experience: '9 – 12+ Years', preRole: 'IT Project Lead, Infrastructure Manager', preSalary: '₹14.5 – 19.0 LPA', postRole: 'Director of Mission-Critical Facilities, Principal Hyperscale Architect', postSalary: '₹40.0 – 50.0+ LPA' },
  ];
  
  export const hiringEcosystems = [
    { category: 'Hyperscalers & Public Cloud', color: 'sky', companies: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Oracle Cloud Infrastructure (OCI)'] },
    { category: 'Colocation & Tier-IV Giants', color: 'emerald', companies: ['Yotta Data Services', 'CtrlS Datacenters', 'NTT Global Data Centers', 'Equinix', 'STT GDC India', 'AdaniConneX'] },
    { category: 'Critical Infrastructure OEMs', color: 'amber', companies: ['Schneider Electric', 'Vertiv', 'Eaton', 'Siemens', 'Cummins Power Generation', 'Delta Electronics'] },
  ];
  
  export const labDomains = [
    { domain: 'Environmental Telemetry', tools: 'Modbus RTU/TCP sensors, temperature strings, humidity probes, water leak ropes.', outcome: 'Detecting hot-spots, thermal stratification, and condensation risks in real time.' },
    { domain: 'Power Flow & Quality', tools: 'Digital multi-function power meters, harmonic analyzers, PDU current transducers.', outcome: 'Measuring real/reactive power, total harmonic distortion (THD), and calculating live PUE.' },
    { domain: 'Storage Fabrics', tools: 'Multi-node Ceph clusters, NVMe-oF target controllers, RoCEv2 switches.', outcome: 'Configuring CRUSH maps, benchmarking 4K random read/write IOPS, handling disk failures.' },
    { domain: 'Disaster Recovery Drills', tools: 'Simulated ATS transfer trips, secondary loop pump shutoffs, network isolation.', outcome: 'Executing zero-downtime failover procedures and verifying automated recovery scripts.' },
  ];
  
  export const weekendSchedule = [
    {
      day: 'Friday',
      focus: 'Physical Infrastructure',
      color: 'emerald',
      description: 'Heavily anchored on Advance Data Centre & Cloud Infrastructure (ADC & CIE) with 3 theory lectures + 2 hours of telemetry lab, preceded by Advanced Mathematics and Research tutorials.',
      sessions: [
        { time: '08:30–10:30', subject: 'Advanced Mathematics', instructor: 'Dr. Ganesh Birajdar' },
        { time: '10:45–12:45', subject: 'Research Methodology Tut + AM Tutorial', instructor: 'Dr. Gutte / Dr. Hambarde / Dr. Birajdar' },
        { time: '01:30–04:45', subject: 'ADC & CIE (3 Theory Lectures)', instructor: 'Dr. Bankolli / Mr. Patil' },
        { time: '04:45–06:45', subject: 'ADC & CIE Lab', instructor: 'Mr. Abhishek Joshi' },
      ],
    },
    {
      day: 'Saturday',
      focus: 'Capstone Simulations',
      color: 'slate',
      description: 'Begins with Yoga & Research Methodology, and culminates in a 4-hour dedicated Project Lab-I block conducting live sensor calibration, load balancing, and failure injection scenarios.',
      sessions: [
        { time: '08:30–10:30', subject: 'Yoga & Studies of Mind & Matter', instructor: 'Mr. Ramesh / Dr. Shinde' },
        { time: '10:45–12:45', subject: 'Research Methodology + Advanced Mathematics', instructor: 'Dr. Gutte / Dr. Hambarde / Dr. Birajdar' },
        { time: '01:30–06:45', subject: 'Project Lab-I (4-hour block)', instructor: 'Mr. Subodh Patil / Mr. Abhishek Joshi' },
      ],
    },
    {
      day: 'Sunday',
      focus: 'Hyperscale Cloud & Storage',
      color: 'rose',
      description: 'Dedicated to Advanced Cloud Computing & Data Storage Systems (ACC & DSS) with 3 theory lectures + 2 hours of hands-on Ceph, NVMe-oF, and SDN labs.',
      sessions: [
        { time: '08:30–10:30', subject: 'Yoga + Studies of Mind & Matter', instructor: 'Mr. Verma / Dr. Shinde / Mr. Ramesh' },
        { time: '10:45–12:45', subject: 'Research Methodology (2 sessions)', instructor: 'Dr. Gutte / Dr. Hambarde' },
        { time: '01:30–04:45', subject: 'ACC & DSS (3 Theory Lectures)', instructor: 'Mr. Vivekanand Navadagi' },
        { time: '04:45–06:45', subject: 'ACC & DSS Lab', instructor: 'Mr. Vivekanand Navadagi' },
      ],
    },
  ];
  
  export const capabilities = [
    { label: 'High-Voltage Power', icon: 'zap' },
    { label: 'Precision Cooling', icon: 'thermometer' },
    { label: 'Facility Automation', icon: 'cpu' },
    { label: 'Hyperscale Cloud', icon: 'cloud' },
    { label: 'Distributed Storage', icon: 'database' },
    { label: 'Software-Defined Networking', icon: 'network' },
    { label: 'Mission-Critical Reliability', icon: 'shield' },
    { label: 'Data Centre Architecture', icon: 'server' },
  ];
  
  export const faqs = [
    { q: 'What is M.Tech in Data Centre Systems Engineering?', a: 'It is India\'s premier postgraduate initiative bridging the critical structural divide between physical Tier-IV facility engineering (high-voltage power, precision thermodynamics, liquid cooling) and hyperscale software-defined cloud storage architectures.' },
    { q: 'Who awards the degree?', a: 'The degree is awarded by Dr. Vishwanath Karad MIT World Peace University, Pune, hosted under the School of Engineering & Technology (SoET) and the Department of Computer Science Engineering.' },
    { q: 'What is the industry partnership?', a: 'The program is built on an industry-academia collaboration between MIT-WPU and NIRVAA Solution Pvt. Ltd., a specialized enterprise firm delivering Tier-IV data center design, facility commissioning, IBMS automation, and distributed cloud storage. NIRVAA provides active industry practitioners with 15 to 30+ years of field experience.' },
    { q: 'What is the delivery model?', a: 'The program operates on an intensive Friday through Sunday schedule (08:30 AM to 06:45 PM), delivering 26 contact hours per week. This weekend-intensive model allows working IT and electrical engineers to earn a full-time, UGC-recognized Master of Technology degree while retaining their corporate jobs.' },
    { q: 'What subjects are covered in Semester I?', a: 'Semester I covers 7 courses totaling 21 credits: Advance Data Centre & Cloud Infrastructure Engineering, Advanced Cloud Computing & Data Storage Systems, Project Lab-I, Advanced Mathematics for Distributed Systems, Research Methodology for Engineers, Studies of Mind & Matter, and Yoga & Wellness Practice.' },
    { q: 'Is the program hands-on?', a: 'Yes. Students do not simply study theoretical concepts from textbooks; they actively interact with physical and virtual telemetry architectures including Modbus sensors, Ceph clusters, NVMe-oF controllers, and live failure simulation benches.' },
    { q: 'What does the Project Lab involve?', a: 'A dedicated 4-hour Saturday laboratory block where students apply theories to live hardware simulations. Modules include physical sensor instrumentation, dynamic load balancing during simulated blackouts, thermal runaway injection drills, and building DCIM dashboards with Grafana, Prometheus, and InfluxDB.' },
    { q: 'What infrastructure technologies are covered?', a: 'The program covers TIA-942 and Uptime Tier I-IV standards, ASHRAE TC 9.9 thermal envelopes, liquid immersion cooling, Ceph distributed storage, NVMe-over-Fabrics, software-defined networking (SDN), spine-leaf CLOS architectures, BGP-EVPN, distributed consensus (Paxos, Raft), and DCIM/IBMS automation.' },
    { q: 'Who teaches the program?', a: 'Students are trained directly by active industry leaders holding executive roles at NIRVAA Solution alongside seasoned academicians from MIT-WPU. Faculty include C-suite executives, cloud architects, and professors with 13 to 30+ years of direct field experience.' },
  ];
  