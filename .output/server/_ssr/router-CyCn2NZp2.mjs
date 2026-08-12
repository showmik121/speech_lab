import { Sn as CalendarCheck, a as Wallet, nn as ClipboardCheck, o as Users, tn as ClipboardList, u as UserPlus } from "../_libs/lucide-react.mjs";
import { g as router_exports } from "./router-CyCn2NZp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patient-data-Cw2Jaqa1.js
var PATIENT_STATUS_TONE = {
	Active: "success",
	Inactive: "neutral",
	"Assessment Pending": "warning",
	"Therapy Running": "info",
	"Therapy Completed": "success",
	"Follow-up Required": "warning"
};
var PAYMENT_STATUS_TONE = {
	Paid: "success",
	"Partially Paid": "info",
	Due: "warning",
	Overdue: "danger"
};
function timeline$1(registered, assessment, session, payment, call) {
	return [
		{
			id: "t1",
			title: "Patient registered",
			description: "Registration completed at the front desk and profile created.",
			date: registered,
			icon: "registered",
			tone: "info"
		},
		{
			id: "t2",
			title: "Assessment scheduled",
			description: "Initial speech and language assessment booked with the clinical team.",
			date: assessment,
			icon: "assessment",
			tone: "warning"
		},
		{
			id: "t3",
			title: "First therapy session",
			description: "Therapy programme started with the assigned therapist.",
			date: session,
			icon: "therapy",
			tone: "info"
		},
		{
			id: "t4",
			title: "Payment received",
			description: "Package instalment collected at the branch counter.",
			date: payment,
			icon: "payment",
			tone: "success"
		},
		{
			id: "t5",
			title: "Follow-up call",
			description: "Guardian contacted for progress review and next appointment.",
			date: call,
			icon: "call",
			tone: "neutral"
		}
	];
}
var PATIENTS = [
	{
		id: "rahim-ahmed",
		code: "PT-DHK-1001",
		name: "Rahim Ahmed",
		dob: "2018-03-12",
		age: 8,
		gender: "Male",
		bloodGroup: "B+",
		address: "House 24, Road 7, Dhanmondi R/A, Dhaka 1205",
		phone: "+880 1711-458920",
		email: "rahim.guardian@gmail.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Md. Karim Ahmed",
			relation: "Father",
			phone: "+880 1711-458920",
			email: "karim.ahmed@gmail.com",
			occupation: "Bank Officer"
		},
		emergencyContact: {
			name: "Shamima Ahmed",
			relation: "Mother",
			phone: "+880 1712-330451"
		},
		medical: {
			primaryConcern: "Delayed speech development and unclear articulation",
			diagnosis: "Articulation disorder (provisional)",
			history: "Full-term birth, no hearing impairment. Recurrent ear infections at age 3.",
			referralDoctor: "Dr. Sabrina Chowdhury (Paediatrics)",
			notes: "Responds well to visual cues. Guardian very cooperative with home practice."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Articulation Programme — Level 2",
			assessmentDate: "2026-02-18",
			therapist: "Farhana Islam",
			expectedStart: "2026-02-24",
			sessionsCompleted: 18,
			sessionsPlanned: 24
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Standard — 12 Sessions",
			registrationFee: 1e3,
			totalBilled: 42e3,
			totalPaid: 42e3,
			due: 0,
			lastPaymentDate: "2026-07-05",
			lastPaymentAmount: 12e3,
			remarks: "Guardian pays by bKash on the 5th of each month."
		},
		followUp: {
			note: "Progress review call completed — articulation clarity improving steadily.",
			date: "2026-07-22",
			by: "Farhana Islam"
		},
		status: "Therapy Running",
		paymentStatus: "Paid",
		lastVisit: "2026-07-28",
		nextSession: "2026-08-03",
		registeredAt: "2026-02-14",
		timeline: timeline$1("2026-02-14", "2026-02-18", "2026-02-24", "2026-07-05", "2026-07-22")
	},
	{
		id: "ayesha-akter",
		code: "PT-DHK-1002",
		name: "Ayesha Akter",
		dob: "2020-07-30",
		age: 6,
		gender: "Female",
		bloodGroup: "O+",
		address: "Flat 5B, House 11, Mohammadpur, Dhaka 1207",
		phone: "+880 1819-772140",
		email: "shamima.begum@gmail.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Shamima Begum",
			relation: "Mother",
			phone: "+880 1819-772140",
			email: "shamima.begum@gmail.com",
			occupation: "School Teacher"
		},
		emergencyContact: {
			name: "Abdul Mannan",
			relation: "Father",
			phone: "+880 1815-220963"
		},
		medical: {
			primaryConcern: "Limited vocabulary and difficulty forming sentences",
			diagnosis: "Expressive language delay (provisional)",
			history: "No significant medical history. Hearing screening normal.",
			referralDoctor: "Dr. Anwar Hossain (ENT)",
			notes: "Shy during first sessions; play-based approach recommended."
		},
		program: {
			therapyType: "Language Therapy",
			program: "Early Language Builder — Level 1",
			assessmentDate: "2026-05-06",
			therapist: "Nusrat Kabir",
			expectedStart: "2026-05-12",
			sessionsCompleted: 9,
			sessionsPlanned: 20
		},
		billing: {
			paymentType: "Session Wise",
			packageName: "Session Wise — Pay per visit",
			registrationFee: 1e3,
			totalBilled: 16200,
			totalPaid: 10800,
			due: 5400,
			lastPaymentDate: "2026-07-19",
			lastPaymentAmount: 1800,
			remarks: "Two sessions pending payment from July."
		},
		followUp: {
			note: "Guardian requested an evening slot from next month.",
			date: "2026-07-25",
			by: "Nusrat Kabir"
		},
		status: "Therapy Running",
		paymentStatus: "Partially Paid",
		lastVisit: "2026-07-26",
		nextSession: "2026-08-02",
		registeredAt: "2026-05-02",
		timeline: timeline$1("2026-05-02", "2026-05-06", "2026-05-12", "2026-07-19", "2026-07-25")
	},
	{
		id: "mahin-hasan",
		code: "PT-DHK-1003",
		name: "Mahin Hasan",
		dob: "2016-11-04",
		age: 9,
		gender: "Male",
		bloodGroup: "A+",
		address: "House 78, Sector 10, Uttara, Dhaka 1230",
		phone: "+880 1730-118845",
		email: "rezaul.hasan@yahoo.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Md. Rezaul Hasan",
			relation: "Father",
			phone: "+880 1730-118845",
			email: "rezaul.hasan@yahoo.com",
			occupation: "Businessman"
		},
		emergencyContact: {
			name: "Nasrin Hasan",
			relation: "Mother",
			phone: "+880 1733-904471"
		},
		medical: {
			primaryConcern: "Stammering that worsens under pressure at school",
			diagnosis: "Fluency disorder (provisional)",
			history: "Stammering noticed from age 5. No neurological findings.",
			referralDoctor: "Dr. Kamrul Islam (Neurology)",
			notes: "School has been informed; classroom strategies shared with the teacher."
		},
		program: {
			therapyType: "Fluency Therapy",
			program: "Fluency Shaping — Level 3",
			assessmentDate: "2026-01-16",
			therapist: "Tanvir Rahman",
			expectedStart: "2026-01-22",
			sessionsCompleted: 32,
			sessionsPlanned: 32
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Premium — 16 Sessions",
			registrationFee: 1e3,
			totalBilled: 68e3,
			totalPaid: 68e3,
			due: 0,
			lastPaymentDate: "2026-06-04",
			lastPaymentAmount: 14e3,
			remarks: "Programme completed in full. Discharge summary issued."
		},
		followUp: {
			note: "Three-month maintenance review scheduled with the guardian.",
			date: "2026-07-10",
			by: "Tanvir Rahman"
		},
		status: "Therapy Completed",
		paymentStatus: "Paid",
		lastVisit: "2026-06-27",
		nextSession: null,
		registeredAt: "2026-01-12",
		timeline: timeline$1("2026-01-12", "2026-01-16", "2026-01-22", "2026-06-04", "2026-07-10")
	},
	{
		id: "nusrat-jahan",
		code: "PT-CTG-1004",
		name: "Nusrat Jahan",
		dob: "2019-09-21",
		age: 6,
		gender: "Female",
		bloodGroup: "AB+",
		address: "Flat 3A, Nasirabad Housing Society, Chattogram 4000",
		phone: "+880 1745-660238",
		email: "jahangir.alam@gmail.com",
		branch: "Chattogram Branch",
		guardian: {
			name: "Md. Jahangir Alam",
			relation: "Father",
			phone: "+880 1745-660238",
			email: "jahangir.alam@gmail.com",
			occupation: "Government Service"
		},
		emergencyContact: {
			name: "Rokeya Alam",
			relation: "Mother",
			phone: "+880 1747-551029"
		},
		medical: {
			primaryConcern: "Difficulty following instructions and delayed responses",
			diagnosis: "Pending formal assessment",
			history: "Premature birth at 34 weeks. Milestones slightly delayed.",
			referralDoctor: "Dr. Farzana Haque (Paediatrics)",
			notes: "Awaiting audiology report before starting therapy."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Awaiting programme assignment",
			assessmentDate: "2026-08-05",
			therapist: "To be assigned",
			expectedStart: "2026-08-12",
			sessionsCompleted: 0,
			sessionsPlanned: 0
		},
		billing: {
			paymentType: "Daily",
			packageName: "Assessment only",
			registrationFee: 1e3,
			totalBilled: 2500,
			totalPaid: 1e3,
			due: 1500,
			lastPaymentDate: "2026-07-24",
			lastPaymentAmount: 1e3,
			remarks: "Assessment fee due on the day of the appointment."
		},
		followUp: {
			note: "Reminder call made for the upcoming assessment appointment.",
			date: "2026-07-29",
			by: "Front Desk"
		},
		status: "Assessment Pending",
		paymentStatus: "Due",
		lastVisit: "2026-07-24",
		nextSession: "2026-08-05",
		registeredAt: "2026-07-22",
		timeline: timeline$1("2026-07-22", "2026-08-05", "2026-08-12", "2026-07-24", "2026-07-29")
	},
	{
		id: "tahsin-rahman",
		code: "PT-DHK-1005",
		name: "Tahsin Rahman",
		dob: "2014-05-08",
		age: 12,
		gender: "Male",
		bloodGroup: "B-",
		address: "House 3, Road 12, Banani, Dhaka 1213",
		phone: "+880 1766-201947",
		email: "sultana.rahman@gmail.com",
		branch: "Gulshan Branch",
		guardian: {
			name: "Sultana Rahman",
			relation: "Mother",
			phone: "+880 1766-201947",
			email: "sultana.rahman@gmail.com",
			occupation: "Doctor"
		},
		emergencyContact: {
			name: "Ashiqur Rahman",
			relation: "Father",
			phone: "+880 1769-874120"
		},
		medical: {
			primaryConcern: "Voice hoarseness after extended speaking",
			diagnosis: "Muscle tension dysphonia (provisional)",
			history: "Active in school debating. Vocal strain reported by the ENT specialist.",
			referralDoctor: "Dr. Rashedul Karim (ENT)",
			notes: "Vocal hygiene routine shared with the guardian and the school."
		},
		program: {
			therapyType: "Voice Therapy",
			program: "Vocal Hygiene & Resonance — Level 2",
			assessmentDate: "2026-04-09",
			therapist: "Maliha Chowdhury",
			expectedStart: "2026-04-15",
			sessionsCompleted: 14,
			sessionsPlanned: 18
		},
		billing: {
			paymentType: "Online Booking",
			packageName: "Online Booking — 6 Session Bundle",
			registrationFee: 1e3,
			totalBilled: 31500,
			totalPaid: 21e3,
			due: 10500,
			lastPaymentDate: "2026-06-30",
			lastPaymentAmount: 10500,
			remarks: "Last bundle invoice is overdue by 4 weeks."
		},
		followUp: {
			note: "Payment reminder sent along with the next appointment confirmation.",
			date: "2026-07-27",
			by: "Accounts Desk"
		},
		status: "Active",
		paymentStatus: "Overdue",
		lastVisit: "2026-07-21",
		nextSession: "2026-08-04",
		registeredAt: "2026-04-05",
		timeline: timeline$1("2026-04-05", "2026-04-09", "2026-04-15", "2026-06-30", "2026-07-27")
	},
	{
		id: "samiha-chowdhury",
		code: "PT-SYL-1006",
		name: "Samiha Chowdhury",
		dob: "2021-02-17",
		age: 5,
		gender: "Female",
		bloodGroup: "O-",
		address: "Zindabazar, Shahjalal Upashahar, Sylhet 3100",
		phone: "+880 1788-334019",
		email: "mizanur.chowdhury@gmail.com",
		branch: "Sylhet Branch",
		guardian: {
			name: "Md. Mizanur Chowdhury",
			relation: "Father",
			phone: "+880 1788-334019",
			email: "mizanur.chowdhury@gmail.com",
			occupation: "Engineer"
		},
		emergencyContact: {
			name: "Tahmina Chowdhury",
			relation: "Mother",
			phone: "+880 1780-115562"
		},
		medical: {
			primaryConcern: "Not yet using two-word phrases consistently",
			diagnosis: "Global language delay (provisional)",
			history: "No birth complications. Family history of late talking.",
			referralDoctor: "Dr. Shahnaz Parvin (Paediatrics)",
			notes: "Parent coaching sessions recommended alongside direct therapy."
		},
		program: {
			therapyType: "Language Therapy",
			program: "Early Intervention — Level 1",
			assessmentDate: "2026-06-11",
			therapist: "Sadia Karim",
			expectedStart: "2026-06-17",
			sessionsCompleted: 6,
			sessionsPlanned: 20
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Basic — 8 Sessions",
			registrationFee: 1e3,
			totalBilled: 18e3,
			totalPaid: 18e3,
			due: 0,
			lastPaymentDate: "2026-07-02",
			lastPaymentAmount: 9e3,
			remarks: "Guardian pays in advance for the full month."
		},
		followUp: {
			note: "Home programme handout shared; guardian to record practice videos.",
			date: "2026-07-20",
			by: "Sadia Karim"
		},
		status: "Therapy Running",
		paymentStatus: "Paid",
		lastVisit: "2026-07-27",
		nextSession: "2026-08-03",
		registeredAt: "2026-06-07",
		timeline: timeline$1("2026-06-07", "2026-06-11", "2026-06-17", "2026-07-02", "2026-07-20")
	},
	{
		id: "arafat-hossain",
		code: "PT-DHK-1007",
		name: "Arafat Hossain",
		dob: "2013-08-25",
		age: 12,
		gender: "Male",
		bloodGroup: "A-",
		address: "House 41, Mirpur DOHS, Dhaka 1216",
		phone: "+880 1799-450712",
		email: "nazma.hossain@gmail.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Nazma Hossain",
			relation: "Mother",
			phone: "+880 1799-450712",
			email: "nazma.hossain@gmail.com",
			occupation: "Homemaker"
		},
		emergencyContact: {
			name: "Delwar Hossain",
			relation: "Father",
			phone: "+880 1791-668034"
		},
		medical: {
			primaryConcern: "Reading fluency and phonological awareness difficulties",
			diagnosis: "Phonological processing difficulty (provisional)",
			history: "Academic support at school since class 3. Vision and hearing normal.",
			referralDoctor: "Dr. Mahfuza Rahman (Child Psychology)",
			notes: "Discontinued sessions during exam period; guardian to resume in August."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Phonological Awareness — Level 2",
			assessmentDate: "2025-11-13",
			therapist: "Farhana Islam",
			expectedStart: "2025-11-19",
			sessionsCompleted: 22,
			sessionsPlanned: 30
		},
		billing: {
			paymentType: "Session Wise",
			packageName: "Session Wise — Pay per visit",
			registrationFee: 1e3,
			totalBilled: 39600,
			totalPaid: 39600,
			due: 0,
			lastPaymentDate: "2026-05-18",
			lastPaymentAmount: 1800,
			remarks: "No outstanding balance at the time of pause."
		},
		followUp: {
			note: "Guardian to confirm restart date after school examinations.",
			date: "2026-07-15",
			by: "Front Desk"
		},
		status: "Inactive",
		paymentStatus: "Paid",
		lastVisit: "2026-05-18",
		nextSession: null,
		registeredAt: "2025-11-09",
		timeline: timeline$1("2025-11-09", "2025-11-13", "2025-11-19", "2026-05-18", "2026-07-15")
	},
	{
		id: "farhana-islam",
		code: "PT-KHL-1008",
		name: "Farhana Islam",
		dob: "2017-12-02",
		age: 8,
		gender: "Female",
		bloodGroup: "B+",
		address: "Sonadanga R/A, KDA Avenue, Khulna 9100",
		phone: "+880 1710-889423",
		email: "shafiqul.islam@gmail.com",
		branch: "Khulna Branch",
		guardian: {
			name: "Md. Shafiqul Islam",
			relation: "Father",
			phone: "+880 1710-889423",
			email: "shafiqul.islam@gmail.com",
			occupation: "College Lecturer"
		},
		emergencyContact: {
			name: "Ruma Islam",
			relation: "Mother",
			phone: "+880 1713-220884"
		},
		medical: {
			primaryConcern: "Nasal speech quality noted after surgery",
			diagnosis: "Resonance disorder (provisional)",
			history: "Cleft palate repair completed at age 2. Regular ENT follow-up.",
			referralDoctor: "Dr. Nasir Uddin (Plastic Surgery)",
			notes: "Coordinated care plan shared with the surgical team."
		},
		program: {
			therapyType: "Voice Therapy",
			program: "Resonance Balancing — Level 1",
			assessmentDate: "2026-03-19",
			therapist: "Jubayer Alam",
			expectedStart: "2026-03-25",
			sessionsCompleted: 16,
			sessionsPlanned: 24
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Standard — 12 Sessions",
			registrationFee: 1e3,
			totalBilled: 34e3,
			totalPaid: 26e3,
			due: 8e3,
			lastPaymentDate: "2026-07-08",
			lastPaymentAmount: 8e3,
			remarks: "July instalment partially settled; balance promised by 10 August."
		},
		followUp: {
			note: "Post-surgery progress reviewed with the guardian and ENT team.",
			date: "2026-07-23",
			by: "Jubayer Alam"
		},
		status: "Follow-up Required",
		paymentStatus: "Partially Paid",
		lastVisit: "2026-07-25",
		nextSession: "2026-08-06",
		registeredAt: "2026-03-15",
		timeline: timeline$1("2026-03-15", "2026-03-19", "2026-03-25", "2026-07-08", "2026-07-23")
	},
	{
		id: "zayan-mahmud",
		code: "PT-DHK-1009",
		name: "Zayan Mahmud",
		dob: "2022-01-09",
		age: 4,
		gender: "Male",
		bloodGroup: "O+",
		address: "House 9, Road 3, Bashundhara R/A, Dhaka 1229",
		phone: "+880 1755-330871",
		email: "tanjina.mahmud@gmail.com",
		branch: "Gulshan Branch",
		guardian: {
			name: "Tanjina Mahmud",
			relation: "Mother",
			phone: "+880 1755-330871",
			email: "tanjina.mahmud@gmail.com",
			occupation: "Architect"
		},
		emergencyContact: {
			name: "Sabbir Mahmud",
			relation: "Father",
			phone: "+880 1757-661209"
		},
		medical: {
			primaryConcern: "Minimal eye contact and very few spoken words",
			diagnosis: "Pending multidisciplinary assessment",
			history: "Referred by the paediatrician after an 18-month developmental screening.",
			referralDoctor: "Dr. Tahmid Chowdhury (Developmental Paediatrics)",
			notes: "Occupational therapy assessment requested in parallel."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Awaiting programme assignment",
			assessmentDate: "2026-08-08",
			therapist: "To be assigned",
			expectedStart: "2026-08-17",
			sessionsCompleted: 0,
			sessionsPlanned: 0
		},
		billing: {
			paymentType: "Online Booking",
			packageName: "Assessment only",
			registrationFee: 1e3,
			totalBilled: 3500,
			totalPaid: 3500,
			due: 0,
			lastPaymentDate: "2026-07-30",
			lastPaymentAmount: 2500,
			remarks: "Assessment fee paid online in advance."
		},
		followUp: {
			note: "Intake questionnaire received from the guardian.",
			date: "2026-07-30",
			by: "Front Desk"
		},
		status: "Assessment Pending",
		paymentStatus: "Paid",
		lastVisit: "2026-07-30",
		nextSession: "2026-08-08",
		registeredAt: "2026-07-28",
		timeline: timeline$1("2026-07-28", "2026-08-08", "2026-08-17", "2026-07-30", "2026-07-30")
	},
	{
		id: "ishrat-binte-noor",
		code: "PT-CTG-1010",
		name: "Ishrat Binte Noor",
		dob: "2015-06-14",
		age: 11,
		gender: "Female",
		bloodGroup: "AB-",
		address: "Khulshi Hills, Zakir Hossain Road, Chattogram 4225",
		phone: "+880 1722-905513",
		email: "noorul.amin@gmail.com",
		branch: "Chattogram Branch",
		guardian: {
			name: "Md. Noorul Amin",
			relation: "Father",
			phone: "+880 1722-905513",
			email: "noorul.amin@gmail.com",
			occupation: "Garments Manager"
		},
		emergencyContact: {
			name: "Shirin Akter",
			relation: "Mother",
			phone: "+880 1725-440178"
		},
		medical: {
			primaryConcern: "Word-finding difficulty and slow verbal recall",
			diagnosis: "Language processing difficulty (provisional)",
			history: "Head injury at age 8 with full physical recovery.",
			referralDoctor: "Dr. Selim Reza (Neurology)",
			notes: "Making steady gains; school reports improved participation."
		},
		program: {
			therapyType: "Language Therapy",
			program: "Language Processing — Level 3",
			assessmentDate: "2026-02-05",
			therapist: "Nusrat Kabir",
			expectedStart: "2026-02-11",
			sessionsCompleted: 26,
			sessionsPlanned: 28
		},
		billing: {
			paymentType: "Daily",
			packageName: "Daily Visit — Standard Rate",
			registrationFee: 1e3,
			totalBilled: 46800,
			totalPaid: 44e3,
			due: 2800,
			lastPaymentDate: "2026-07-26",
			lastPaymentAmount: 1800,
			remarks: "Two daily visits remain unbilled from last week."
		},
		followUp: {
			note: "Discharge planning discussion scheduled for mid-August.",
			date: "2026-07-28",
			by: "Nusrat Kabir"
		},
		status: "Therapy Running",
		paymentStatus: "Due",
		lastVisit: "2026-07-29",
		nextSession: "2026-08-05",
		registeredAt: "2026-02-01",
		timeline: timeline$1("2026-02-01", "2026-02-05", "2026-02-11", "2026-07-26", "2026-07-28")
	}
];
var PATIENT_STATUSES = [
	"Active",
	"Inactive",
	"Assessment Pending",
	"Therapy Running",
	"Therapy Completed",
	"Follow-up Required"
];
var THERAPY_TYPES = [
	"Speech Therapy",
	"Language Therapy",
	"Fluency Therapy",
	"Voice Therapy",
	"Swallowing Therapy"
];
var PAYMENT_TYPES = [
	"Daily",
	"Session Wise",
	"Monthly",
	"Online Booking"
];
var GENDERS = ["Male", "Female"];
var BLOOD_GROUPS = [
	"A+",
	"A-",
	"B+",
	"B-",
	"AB+",
	"AB-",
	"O+",
	"O-"
];
var GUARDIAN_RELATIONS = [
	"Father",
	"Mother",
	"Grandparent",
	"Sibling",
	"Uncle",
	"Aunt",
	"Other"
];
var BRANCH_OPTIONS = [
	"Dhaka Main Branch",
	"Gulshan Branch",
	"Chattogram Branch",
	"Sylhet Branch",
	"Khulna Branch"
];
var THERAPISTS$1 = [
	"Farhana Islam",
	"Nusrat Kabir",
	"Tanvir Rahman",
	"Maliha Chowdhury",
	"Sadia Karim",
	"Jubayer Alam"
];
var PROGRAM_OPTIONS_BY_THERAPY = {
	"Speech Therapy": ["Articulation Programme — Level 2", "Phonological Awareness — Level 2"],
	"Language Therapy": [
		"Early Intervention — Level 1",
		"Early Language Builder — Level 1",
		"Language Processing — Level 3"
	],
	"Fluency Therapy": ["Fluency Shaping — Level 3"],
	"Voice Therapy": ["Resonance Balancing — Level 1"],
	"Swallowing Therapy": ["Swallowing Rehabilitation — Level 1"]
};
Object.values(PROGRAM_OPTIONS_BY_THERAPY).flat();
var PATIENT_DATE_RANGES = [
	{
		key: "all",
		label: "All time"
	},
	{
		key: "30d",
		label: "Last 30 days"
	},
	{
		key: "90d",
		label: "Last 90 days"
	},
	{
		key: "1y",
		label: "Last 12 months"
	}
];
var totalDue = PATIENTS.reduce((sum, patient) => sum + patient.billing.due, 0);
var duePatients = PATIENTS.filter((patient) => patient.billing.due > 0).length;
var PATIENT_KPIS = [
	{
		id: "total",
		label: "Total Patients",
		value: String(PATIENTS.length),
		icon: Users,
		tone: "primary",
		hint: "Across all branches",
		delta: {
			value: "+12%",
			direction: "up"
		}
	},
	{
		id: "active",
		label: "Active Patients",
		value: String(PATIENTS.filter((patient) => [
			"Active",
			"Therapy Running",
			"Follow-up Required"
		].includes(patient.status)).length),
		icon: ClipboardList,
		tone: "success",
		hint: "Currently in care",
		delta: {
			value: "+4 this week",
			direction: "up"
		}
	},
	{
		id: "new",
		label: "New This Month",
		value: String(PATIENTS.filter((patient) => patient.registeredAt >= "2026-07-01").length),
		icon: UserPlus,
		tone: "primary",
		hint: "July 2026 registrations",
		delta: {
			value: "+2 vs June",
			direction: "up"
		}
	},
	{
		id: "assessment",
		label: "Assessment Pending",
		value: String(PATIENTS.filter((patient) => patient.status === "Assessment Pending").length),
		icon: ClipboardCheck,
		tone: "warning",
		hint: "Awaiting first assessment",
		delta: {
			value: "Needs scheduling",
			direction: "flat"
		}
	},
	{
		id: "therapy",
		label: "Therapy Ongoing",
		value: String(PATIENTS.filter((patient) => patient.status === "Therapy Running").length),
		icon: CalendarCheck,
		tone: "primary",
		hint: "Active therapy programmes",
		delta: {
			value: "+1 this week",
			direction: "up"
		}
	},
	{
		id: "due",
		label: "Pending Due Payments",
		value: `৳ ${new Intl.NumberFormat("en-IN").format(totalDue)}`,
		icon: Wallet,
		tone: "danger",
		hint: `${duePatients} patients with balance`,
		delta: {
			value: "Follow up required",
			direction: "down"
		}
	}
];
function findPatient(id) {
	return PATIENTS.find((patient) => patient.id === id);
}
function calculateAge(dob) {
	if (!dob) return "";
	const birth = new Date(dob);
	if (Number.isNaN(birth.getTime())) return "";
	const today = /* @__PURE__ */ new Date();
	let age = today.getFullYear() - birth.getFullYear();
	const monthDelta = today.getMonth() - birth.getMonth();
	if (monthDelta < 0 || monthDelta === 0 && today.getDate() < birth.getDate()) age -= 1;
	return age >= 0 ? String(age) : "";
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/therapy-data--L5tymgW.js
/**
* Static demo data for the Therapy Management module.
* Shapes mirror the payloads expected from the Django REST API later,
* so screens can switch to live data without structural changes.
*/
var TODAY_ISO = "2026-07-31";
var THERAPY_STATUS_TONE = {
	Scheduled: "info",
	Completed: "success",
	Ongoing: "warning",
	Missed: "danger",
	Cancelled: "neutral"
};
var ATTENDANCE_TONE = {
	Present: "success",
	Absent: "danger",
	Late: "warning",
	Rescheduled: "info"
};
var THERAPY_MODES = ["Individual Therapy", "Group Therapy"];
var THERAPY_PROGRAMS = [
	"Speech Therapy",
	"Language Therapy",
	"Occupational Therapy",
	"Autism Therapy"
];
var THERAPISTS = [
	"Nusrat Jahan Mim",
	"Tanvir Hasan",
	"Farhana Islam",
	"Dr. Sabrina Chowdhury",
	"Ashiqur Rahman",
	"Sadia Afrin"
];
var THERAPY_ROOMS = [
	"Room 101 — Speech Suite",
	"Room 102 — Language Lab",
	"Room 203 — Sensory Room",
	"Room 204 — Group Hall",
	"Room 305 — OT Gym"
];
var THERAPY_EQUIPMENT = [
	"Articulation Card Set",
	"PECS Communication Board",
	"Mirror Station",
	"Oral Motor Kit",
	"Sensory Swing",
	"Therapy Ball",
	"Flashcard Deck",
	"Bubble Kit",
	"Tablet with AAC App"
];
var SESSION_GOAL_SKILLS = [
	"Communication",
	"Eye Contact",
	"Speech Clarity",
	"Vocabulary",
	"Social Interaction",
	"Attention",
	"Turn Taking",
	"Oral Motor Control"
];
function progressTone(value) {
	if (value >= 75) return "success";
	if (value >= 50) return "info";
	if (value >= 30) return "warning";
	return "danger";
}
function progressStatus(value) {
	if (value >= 85) return "Goal met";
	if (value >= 70) return "On track";
	if (value >= 50) return "Improving";
	if (value >= 30) return "Emerging";
	return "Needs focus";
}
function skills(values) {
	return [
		{
			key: "communication",
			label: "Communication"
		},
		{
			key: "eyeContact",
			label: "Eye Contact"
		},
		{
			key: "speechClarity",
			label: "Speech Clarity"
		},
		{
			key: "vocabulary",
			label: "Vocabulary"
		},
		{
			key: "socialInteraction",
			label: "Social Interaction"
		},
		{
			key: "attention",
			label: "Attention"
		}
	].map((item, index) => ({
		key: item.key,
		label: item.label,
		value: values[index],
		status: progressStatus(values[index]),
		tone: progressTone(values[index])
	}));
}
function timeline(assessmentDate, first, second, current, followUp) {
	return [
		{
			id: "tl-1",
			title: "Assessment completed",
			description: "Initial clinical assessment finished and therapy plan approved.",
			date: assessmentDate,
			tone: "info"
		},
		{
			id: "tl-2",
			title: "Session 1 completed",
			description: "Baseline goals introduced, guardian oriented to home practice.",
			date: first,
			tone: "success"
		},
		{
			id: "tl-3",
			title: "Session 2 completed",
			description: "Target sounds drilled with visual cue support.",
			date: second,
			tone: "success"
		},
		{
			id: "tl-4",
			title: "Current session",
			description: "Scheduled continuation of the running therapy programme.",
			date: current,
			tone: "warning"
		},
		{
			id: "tl-5",
			title: "Follow-up review",
			description: "Progress review with the clinical lead and guardian.",
			date: followUp,
			tone: "neutral"
		}
	];
}
var THERAPY_SESSIONS = [
	{
		id: "ths-1001",
		code: "THS-2026-1001",
		patientId: "rahim-ahmed",
		patientName: "Rahim Ahmed",
		patientCode: "PT-DHK-1001",
		patientAge: 7,
		patientGender: "Male",
		guardianName: "Md. Karim Ahmed",
		guardianPhone: "+880 1711-458920",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 9,
		totalSessions: 12,
		sessionDate: "2026-07-31",
		startTime: "10:00",
		endTime: "10:45",
		room: "Room 101 — Speech Suite",
		therapist: "Nusrat Jahan Mim",
		equipment: ["Articulation Card Set", "Mirror Station"],
		status: "Ongoing",
		attendance: "Present",
		progress: 72,
		diagnosis: "Articulation disorder (provisional)",
		assessmentSummary: "Consistent substitution of /r/ and /s/ sounds in conversational speech. Comprehension age appropriate.",
		therapyPlan: "Twice weekly articulation therapy for 3 months with guardian-led daily practice at home.",
		packageName: "Monthly Standard — 12 Sessions",
		packageSessionsUsed: 9,
		packageSessionsTotal: 12,
		createdAt: "2026-07-24T09:15:00",
		goals: {
			sessionGoal: "Produce /r/ in initial word position with 80% accuracy.",
			targetSkills: ["Speech Clarity", "Attention"],
			activities: [
				"Mirror drills",
				"Picture naming",
				"Sentence repetition"
			],
			materials: ["Articulation Card Set", "Mirror Station"],
			expectedOutcome: "Independent /r/ production in 8 of 10 target words."
		},
		notes: {
			objectives: "Strengthen initial /r/ production and carry over into short phrases.",
			activitiesPerformed: "Mirror-based articulation drills, 40 picture-naming trials, phrase-level carryover practice.",
			patientResponse: "Highly cooperative, achieved 78% accuracy at word level with occasional visual cues.",
			behavior: "Attentive throughout, minor restlessness in the last 5 minutes.",
			homework: "10 minutes daily card drill with the guardian; record 5 trials per day.",
			recommendations: "Continue current plan; introduce medial /r/ next session.",
			therapistNotes: "Good motivation. Guardian is consistent with practice logs which is accelerating carryover."
		},
		progressSkills: skills([
			74,
			82,
			68,
			71,
			65,
			70
		]),
		group: null,
		timeline: timeline("2026-05-12", "2026-05-19", "2026-05-26", "2026-07-31", "2026-08-14")
	},
	{
		id: "ths-1002",
		code: "THS-2026-1002",
		patientId: "ayesha-akter",
		patientName: "Ayesha Akter",
		patientCode: "PT-DHK-1002",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Shamima Begum",
		guardianPhone: "+880 1819-772140",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Language Therapy",
		sessionNumber: 4,
		totalSessions: 16,
		sessionDate: "2026-07-31",
		startTime: "11:30",
		endTime: "12:15",
		room: "Room 102 — Language Lab",
		therapist: "Farhana Islam",
		equipment: ["Flashcard Deck", "PECS Communication Board"],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 38,
		diagnosis: "Expressive language delay (provisional)",
		assessmentSummary: "Vocabulary approximately 18 months behind chronological age. Receptive skills stronger than expressive.",
		therapyPlan: "Language stimulation therapy twice weekly with visual support strategies.",
		packageName: "Session Wise — Pay per visit",
		packageSessionsUsed: 4,
		packageSessionsTotal: 16,
		createdAt: "2026-07-26T14:05:00",
		goals: {
			sessionGoal: "Expand two-word combinations to 15 spontaneous productions.",
			targetSkills: ["Vocabulary", "Communication"],
			activities: [
				"Picture description",
				"Story sequencing",
				"Modelled play"
			],
			materials: ["Flashcard Deck", "PECS Communication Board"],
			expectedOutcome: "Spontaneous two-word phrases during structured play."
		},
		notes: {
			objectives: "Increase spontaneous expressive output during play routines.",
			activitiesPerformed: "Modelled play with expansion, 3 sequencing tasks, snack-time requesting.",
			patientResponse: "Produced 11 spontaneous two-word phrases, improving from 6 last session.",
			behavior: "Shy at the start, warmed up after the play routine.",
			homework: "Guardian to model two-word phrases during daily routines.",
			recommendations: "Continue play-based stimulation; add choice-making opportunities.",
			therapistNotes: "Responds best to routine-based prompts rather than table work."
		},
		progressSkills: skills([
			42,
			55,
			34,
			40,
			36,
			45
		]),
		group: null,
		timeline: timeline("2026-06-02", "2026-06-09", "2026-06-16", "2026-07-31", "2026-08-20")
	},
	{
		id: "ths-1003",
		code: "THS-2026-1003",
		patientId: "mahin-hasan",
		patientName: "Mahin Hasan",
		patientCode: "PT-DHK-1003",
		patientAge: 9,
		patientGender: "Male",
		guardianName: "Md. Rezaul Hasan",
		guardianPhone: "+880 1730-118845",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 12,
		totalSessions: 12,
		sessionDate: "2026-07-29",
		startTime: "09:00",
		endTime: "09:45",
		room: "Room 101 — Speech Suite",
		therapist: "Tanvir Hasan",
		equipment: ["Oral Motor Kit", "Tablet with AAC App"],
		status: "Completed",
		attendance: "Present",
		progress: 88,
		diagnosis: "Fluency disorder (provisional)",
		assessmentSummary: "Moderate stammering with block-type disfluencies, most prominent in classroom settings.",
		therapyPlan: "Fluency shaping with easy-onset technique and school carryover programme.",
		packageName: "Monthly Premium — 16 Sessions",
		packageSessionsUsed: 12,
		packageSessionsTotal: 16,
		createdAt: "2026-07-22T08:40:00",
		goals: {
			sessionGoal: "Maintain easy onset across 3-minute conversational speech.",
			targetSkills: ["Speech Clarity", "Communication"],
			activities: [
				"Easy onset drills",
				"Conversational practice",
				"Reading aloud"
			],
			materials: ["Oral Motor Kit", "Tablet with AAC App"],
			expectedOutcome: "Under 5% disfluency in structured conversation."
		},
		notes: {
			objectives: "Consolidate fluency technique in longer conversational turns.",
			activitiesPerformed: "Easy onset warm-up, 3-minute monologue, reading passage, role play.",
			patientResponse: "Disfluency reduced to 4% in structured conversation — best score to date.",
			behavior: "Confident and self-monitoring without prompts.",
			homework: "Daily 5-minute reading aloud recording shared with the therapist.",
			recommendations: "Move to maintenance phase with fortnightly reviews.",
			therapistNotes: "Ready for discharge planning after two maintenance sessions."
		},
		progressSkills: skills([
			88,
			90,
			86,
			84,
			80,
			85
		]),
		group: null,
		timeline: timeline("2026-04-08", "2026-04-15", "2026-04-22", "2026-07-29", "2026-08-12")
	},
	{
		id: "ths-1004",
		code: "THS-2026-1004",
		patientId: "nusrat-jahan",
		patientName: "Nusrat Jahan",
		patientCode: "PT-CTG-1004",
		patientAge: 4,
		patientGender: "Female",
		guardianName: "Md. Jahangir Alam",
		guardianPhone: "+880 1745-660238",
		branch: "Chattogram Branch",
		mode: "Group Therapy",
		program: "Autism Therapy",
		sessionNumber: 6,
		totalSessions: 20,
		sessionDate: "2026-07-31",
		startTime: "14:00",
		endTime: "15:00",
		room: "Room 204 — Group Hall",
		therapist: "Dr. Sabrina Chowdhury",
		equipment: [
			"Sensory Swing",
			"Bubble Kit",
			"Therapy Ball"
		],
		status: "Ongoing",
		attendance: "Present",
		progress: 46,
		diagnosis: "Pending formal assessment",
		assessmentSummary: "Limited joint attention and reduced peer interaction. Sensory seeking behaviour observed.",
		therapyPlan: "Weekly group social communication therapy alongside individual sessions.",
		packageName: "Assessment only",
		packageSessionsUsed: 6,
		packageSessionsTotal: 20,
		createdAt: "2026-07-25T10:20:00",
		goals: {
			sessionGoal: "Initiate two peer interactions during the group circle activity.",
			targetSkills: [
				"Social Interaction",
				"Eye Contact",
				"Turn Taking"
			],
			activities: [
				"Circle time greeting",
				"Turn-taking game",
				"Sensory break"
			],
			materials: ["Sensory Swing", "Bubble Kit"],
			expectedOutcome: "Two independent peer initiations within the session."
		},
		notes: {
			objectives: "Build peer-directed communication in a small group setting.",
			activitiesPerformed: "Circle greeting, ball-passing turn taking, shared bubble play.",
			patientResponse: "One independent and two prompted peer initiations recorded.",
			behavior: "Sought sensory input twice; settled quickly after the swing break.",
			homework: "Arrange one short peer play date per week.",
			recommendations: "Continue group therapy; keep sensory breaks scheduled mid-session.",
			therapistNotes: "Group format is producing better initiation rates than one-to-one work."
		},
		progressSkills: skills([
			44,
			38,
			40,
			48,
			52,
			42
		]),
		group: {
			groupName: "Little Talkers — Group B",
			sessionTopic: "Turn taking and greeting peers",
			totalChildren: 6,
			present: 5,
			absent: 1,
			activities: [
				"Circle time greeting song",
				"Ball passing with name calling",
				"Shared bubble play",
				"Group clean-up routine"
			],
			remarks: "Strong engagement overall. One child absent due to illness; guardian informed the front desk.",
			members: [
				{
					id: "nusrat-jahan",
					name: "Nusrat Jahan",
					patientCode: "PT-CTG-1004",
					age: 4,
					attendance: "Present"
				},
				{
					id: "ishrat-binte-noor",
					name: "Ishrat Binte Noor",
					patientCode: "PT-CTG-1010",
					age: 5,
					attendance: "Present"
				},
				{
					id: "zayan-mahmud",
					name: "Zayan Mahmud",
					patientCode: "PT-DHK-1009",
					age: 6,
					attendance: "Late"
				},
				{
					id: "arafat-hossain",
					name: "Arafat Hossain",
					patientCode: "PT-DHK-1007",
					age: 8,
					attendance: "Present"
				},
				{
					id: "samiha-chowdhury",
					name: "Samiha Chowdhury",
					patientCode: "PT-SYL-1006",
					age: 6,
					attendance: "Present"
				},
				{
					id: "farhana-islam",
					name: "Farhana Islam",
					patientCode: "PT-KHL-1008",
					age: 7,
					attendance: "Absent"
				}
			]
		},
		timeline: timeline("2026-06-10", "2026-06-17", "2026-06-24", "2026-07-31", "2026-08-21")
	},
	{
		id: "ths-1005",
		code: "THS-2026-1005",
		patientId: "tahsin-rahman",
		patientName: "Tahsin Rahman",
		patientCode: "PT-DHK-1005",
		patientAge: 11,
		patientGender: "Male",
		guardianName: "Sultana Rahman",
		guardianPhone: "+880 1766-201947",
		branch: "Gulshan Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 3,
		totalSessions: 6,
		sessionDate: "2026-07-28",
		startTime: "16:00",
		endTime: "16:45",
		room: "Room 101 — Speech Suite",
		therapist: "Ashiqur Rahman",
		equipment: ["Mirror Station", "Oral Motor Kit"],
		status: "Missed",
		attendance: "Absent",
		progress: 28,
		diagnosis: "Muscle tension dysphonia (provisional)",
		assessmentSummary: "Hoarse vocal quality with excessive laryngeal tension during speech.",
		therapyPlan: "Voice therapy with resonant voice technique and vocal hygiene education.",
		packageName: "Online Booking — 6 Session Bundle",
		packageSessionsUsed: 3,
		packageSessionsTotal: 6,
		createdAt: "2026-07-21T12:00:00",
		goals: {
			sessionGoal: "Sustain resonant voice for 10 consecutive phrases.",
			targetSkills: ["Speech Clarity", "Attention"],
			activities: [
				"Humming warm-up",
				"Resonant phrase practice",
				"Vocal hygiene review"
			],
			materials: ["Mirror Station"],
			expectedOutcome: "Reduced strain during sustained phonation tasks."
		},
		notes: {
			objectives: "Reduce laryngeal tension during connected speech.",
			activitiesPerformed: "Session not held — patient did not attend.",
			patientResponse: "Not applicable.",
			behavior: "Not applicable.",
			homework: "Carry over previous vocal hygiene checklist.",
			recommendations: "Front desk to reschedule within the same week.",
			therapistNotes: "Second missed session this month. Guardian follow-up call required."
		},
		progressSkills: skills([
			30,
			45,
			26,
			33,
			38,
			29
		]),
		group: null,
		timeline: timeline("2026-06-25", "2026-07-02", "2026-07-14", "2026-07-28", "2026-08-05")
	},
	{
		id: "ths-1006",
		code: "THS-2026-1006",
		patientId: "samiha-chowdhury",
		patientName: "Samiha Chowdhury",
		patientCode: "PT-SYL-1006",
		patientAge: 6,
		patientGender: "Female",
		guardianName: "Md. Mizanur Chowdhury",
		guardianPhone: "+880 1788-334019",
		branch: "Sylhet Branch",
		mode: "Individual Therapy",
		program: "Occupational Therapy",
		sessionNumber: 7,
		totalSessions: 8,
		sessionDate: "2026-08-03",
		startTime: "10:30",
		endTime: "11:15",
		room: "Room 305 — OT Gym",
		therapist: "Sadia Afrin",
		equipment: ["Therapy Ball", "Sensory Swing"],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 61,
		diagnosis: "Global language delay (provisional)",
		assessmentSummary: "Fine motor delay with reduced bilateral coordination affecting handwriting readiness.",
		therapyPlan: "Occupational therapy focused on fine motor and sensory regulation goals.",
		packageName: "Monthly Basic — 8 Sessions",
		packageSessionsUsed: 7,
		packageSessionsTotal: 8,
		createdAt: "2026-07-27T11:45:00",
		goals: {
			sessionGoal: "Complete a 6-step bead threading task with minimal support.",
			targetSkills: ["Attention", "Communication"],
			activities: [
				"Bead threading",
				"Balance work",
				"Pencil grip practice"
			],
			materials: ["Therapy Ball", "Sensory Swing"],
			expectedOutcome: "Independent completion of the fine motor sequence."
		},
		notes: {
			objectives: "Improve bilateral coordination and sustained attention on table tasks.",
			activitiesPerformed: "Bead threading, balance board circuit, tripod grip tracing.",
			patientResponse: "Completed 5 of 6 steps independently.",
			behavior: "Engaged and calm; needed one movement break.",
			homework: "Daily 10-minute tracing sheet at home.",
			recommendations: "Plan discharge review after the final package session.",
			therapistNotes: "Ready for a school-readiness handover report."
		},
		progressSkills: skills([
			58,
			66,
			54,
			60,
			63,
			68
		]),
		group: null,
		timeline: timeline("2026-05-20", "2026-05-27", "2026-06-03", "2026-08-03", "2026-08-24")
	},
	{
		id: "ths-1007",
		code: "THS-2026-1007",
		patientId: "arafat-hossain",
		patientName: "Arafat Hossain",
		patientCode: "PT-DHK-1007",
		patientAge: 8,
		patientGender: "Male",
		guardianName: "Nazma Hossain",
		guardianPhone: "+880 1799-450712",
		branch: "Dhaka Main Branch",
		mode: "Group Therapy",
		program: "Language Therapy",
		sessionNumber: 10,
		totalSessions: 24,
		sessionDate: "2026-07-30",
		startTime: "15:00",
		endTime: "16:00",
		room: "Room 204 — Group Hall",
		therapist: "Farhana Islam",
		equipment: ["Flashcard Deck", "PECS Communication Board"],
		status: "Completed",
		attendance: "Present",
		progress: 69,
		diagnosis: "Phonological processing difficulty (provisional)",
		assessmentSummary: "Phonological processing weakness affecting word retrieval and classroom participation.",
		therapyPlan: "Group language enrichment plus weekly individual phonology drill.",
		packageName: "Session Wise — Pay per visit",
		packageSessionsUsed: 10,
		packageSessionsTotal: 24,
		createdAt: "2026-07-23T13:10:00",
		goals: {
			sessionGoal: "Retrieve 12 category words within the group naming game.",
			targetSkills: ["Vocabulary", "Social Interaction"],
			activities: [
				"Category naming race",
				"Group storytelling",
				"Peer feedback round"
			],
			materials: ["Flashcard Deck"],
			expectedOutcome: "Faster word retrieval with peer support."
		},
		notes: {
			objectives: "Improve word retrieval speed in a peer setting.",
			activitiesPerformed: "Category naming race, collaborative story building, peer feedback.",
			patientResponse: "Retrieved 14 category words, exceeding the session target.",
			behavior: "Enthusiastic leader within the group; supported quieter peers.",
			homework: "Category word list practice three times a week.",
			recommendations: "Increase task complexity with multi-syllable targets.",
			therapistNotes: "Peer modelling is a strong motivator for this child."
		},
		progressSkills: skills([
			70,
			72,
			64,
			76,
			74,
			66
		]),
		group: {
			groupName: "Word Builders — Group A",
			sessionTopic: "Category naming and story building",
			totalChildren: 5,
			present: 4,
			absent: 1,
			activities: [
				"Warm-up naming race",
				"Collaborative story building",
				"Peer feedback circle",
				"Closing recap"
			],
			remarks: "Excellent peer dynamics. One child absent with prior notice from the guardian.",
			members: [
				{
					id: "arafat-hossain",
					name: "Arafat Hossain",
					patientCode: "PT-DHK-1007",
					age: 8,
					attendance: "Present"
				},
				{
					id: "rahim-ahmed",
					name: "Rahim Ahmed",
					patientCode: "PT-DHK-1001",
					age: 7,
					attendance: "Present"
				},
				{
					id: "mahin-hasan",
					name: "Mahin Hasan",
					patientCode: "PT-DHK-1003",
					age: 9,
					attendance: "Late"
				},
				{
					id: "zayan-mahmud",
					name: "Zayan Mahmud",
					patientCode: "PT-DHK-1009",
					age: 6,
					attendance: "Present"
				},
				{
					id: "ayesha-akter",
					name: "Ayesha Akter",
					patientCode: "PT-DHK-1002",
					age: 5,
					attendance: "Absent"
				}
			]
		},
		timeline: timeline("2026-04-29", "2026-05-06", "2026-05-13", "2026-07-30", "2026-08-13")
	},
	{
		id: "ths-1008",
		code: "THS-2026-1008",
		patientId: "farhana-islam",
		patientName: "Farhana Islam",
		patientCode: "PT-KHL-1008",
		patientAge: 7,
		patientGender: "Female",
		guardianName: "Md. Shafiqul Islam",
		guardianPhone: "+880 1710-889423",
		branch: "Khulna Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 2,
		totalSessions: 12,
		sessionDate: "2026-07-27",
		startTime: "12:00",
		endTime: "12:45",
		room: "Room 102 — Language Lab",
		therapist: "Tanvir Hasan",
		equipment: ["Mirror Station", "Flashcard Deck"],
		status: "Cancelled",
		attendance: "Rescheduled",
		progress: 18,
		diagnosis: "Resonance disorder (provisional)",
		assessmentSummary: "Hypernasal resonance affecting intelligibility in connected speech.",
		therapyPlan: "Resonance therapy with airflow redirection exercises twice weekly.",
		packageName: "Monthly Standard — 12 Sessions",
		packageSessionsUsed: 2,
		packageSessionsTotal: 12,
		createdAt: "2026-07-20T09:30:00",
		goals: {
			sessionGoal: "Establish oral airflow on 10 pressure consonant words.",
			targetSkills: ["Speech Clarity"],
			activities: ["Airflow exercises", "Pressure consonant drills"],
			materials: ["Mirror Station"],
			expectedOutcome: "Reduced nasal emission on target words."
		},
		notes: {
			objectives: "Establish consistent oral airflow.",
			activitiesPerformed: "Session cancelled by the branch due to therapist emergency leave.",
			patientResponse: "Not applicable.",
			behavior: "Not applicable.",
			homework: "Continue previous airflow homework sheet.",
			recommendations: "Rebook with the same therapist within three days.",
			therapistNotes: "Guardian was informed by phone and agreed to a new slot."
		},
		progressSkills: skills([
			20,
			34,
			16,
			22,
			28,
			24
		]),
		group: null,
		timeline: timeline("2026-07-06", "2026-07-13", "2026-07-20", "2026-07-27", "2026-08-06")
	},
	{
		id: "ths-1009",
		code: "THS-2026-1009",
		patientId: "zayan-mahmud",
		patientName: "Zayan Mahmud",
		patientCode: "PT-DHK-1009",
		patientAge: 6,
		patientGender: "Male",
		guardianName: "Tanjina Mahmud",
		guardianPhone: "+880 1755-330871",
		branch: "Gulshan Branch",
		mode: "Individual Therapy",
		program: "Autism Therapy",
		sessionNumber: 15,
		totalSessions: 24,
		sessionDate: "2026-08-04",
		startTime: "09:30",
		endTime: "10:30",
		room: "Room 203 — Sensory Room",
		therapist: "Dr. Sabrina Chowdhury",
		equipment: [
			"Sensory Swing",
			"Tablet with AAC App",
			"Therapy Ball"
		],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 55,
		diagnosis: "Pending multidisciplinary assessment",
		assessmentSummary: "Emerging AAC user with sensory regulation needs and limited spontaneous requesting.",
		therapyPlan: "Structured ABA-informed therapy with AAC integration three times a week.",
		packageName: "Assessment only",
		packageSessionsUsed: 15,
		packageSessionsTotal: 24,
		createdAt: "2026-07-29T15:25:00",
		goals: {
			sessionGoal: "Make 8 independent AAC requests during structured play.",
			targetSkills: [
				"Communication",
				"Eye Contact",
				"Attention"
			],
			activities: [
				"AAC requesting",
				"Sensory circuit",
				"Structured play"
			],
			materials: ["Tablet with AAC App", "Sensory Swing"],
			expectedOutcome: "Eight independent device-based requests."
		},
		notes: {
			objectives: "Increase independent AAC requesting across activities.",
			activitiesPerformed: "AAC requesting trials, sensory circuit, motivating play routine.",
			patientResponse: "Six independent requests, two prompted — steady upward trend.",
			behavior: "Calm after the sensory circuit; brief protest at transitions.",
			homework: "Keep the AAC device available during all meals at home.",
			recommendations: "Add a transition visual schedule to reduce protest behaviour.",
			therapistNotes: "Device familiarity has improved noticeably over the last month."
		},
		progressSkills: skills([
			56,
			48,
			44,
			58,
			50,
			52
		]),
		group: null,
		timeline: timeline("2026-03-18", "2026-03-25", "2026-04-01", "2026-08-04", "2026-08-25")
	},
	{
		id: "ths-1010",
		code: "THS-2026-1010",
		patientId: "ishrat-binte-noor",
		patientName: "Ishrat Binte Noor",
		patientCode: "PT-CTG-1010",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Md. Noorul Amin",
		guardianPhone: "+880 1722-905513",
		branch: "Chattogram Branch",
		mode: "Individual Therapy",
		program: "Language Therapy",
		sessionNumber: 5,
		totalSessions: 12,
		sessionDate: "2026-07-31",
		startTime: "13:00",
		endTime: "13:45",
		room: "Room 102 — Language Lab",
		therapist: "Ashiqur Rahman",
		equipment: ["Flashcard Deck", "Bubble Kit"],
		status: "Scheduled",
		attendance: "Late",
		progress: 44,
		diagnosis: "Receptive language delay (provisional)",
		assessmentSummary: "Difficulty following two-step instructions and reduced vocabulary comprehension.",
		therapyPlan: "Receptive language therapy with visual scaffolding twice weekly.",
		packageName: "Daily Visit — Standard Rate",
		packageSessionsUsed: 5,
		packageSessionsTotal: 12,
		createdAt: "2026-07-30T10:05:00",
		goals: {
			sessionGoal: "Follow 8 of 10 two-step instructions without visual cues.",
			targetSkills: [
				"Communication",
				"Attention",
				"Vocabulary"
			],
			activities: [
				"Instruction following",
				"Object identification",
				"Listening game"
			],
			materials: ["Flashcard Deck", "Bubble Kit"],
			expectedOutcome: "Consistent two-step instruction comprehension."
		},
		notes: {
			objectives: "Improve comprehension of multi-step verbal instructions.",
			activitiesPerformed: "Instruction following circuit, object identification, listening game.",
			patientResponse: "Followed 7 of 10 instructions without cues.",
			behavior: "Arrived late but settled quickly and stayed engaged.",
			homework: "Two-step instruction practice during evening routines.",
			recommendations: "Fade visual cues gradually over the next three sessions.",
			therapistNotes: "Attendance timing should be discussed with the guardian."
		},
		progressSkills: skills([
			46,
			52,
			38,
			42,
			40,
			48
		]),
		group: null,
		timeline: timeline("2026-06-15", "2026-06-22", "2026-06-29", "2026-07-31", "2026-08-19")
	},
	{
		id: "ths-1011",
		code: "THS-2026-1011",
		patientId: "rahim-ahmed",
		patientName: "Rahim Ahmed",
		patientCode: "PT-DHK-1001",
		patientAge: 7,
		patientGender: "Male",
		guardianName: "Md. Karim Ahmed",
		guardianPhone: "+880 1711-458920",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Occupational Therapy",
		sessionNumber: 8,
		totalSessions: 12,
		sessionDate: "2026-07-24",
		startTime: "17:00",
		endTime: "17:45",
		room: "Room 305 — OT Gym",
		therapist: "Sadia Afrin",
		equipment: ["Therapy Ball", "Sensory Swing"],
		status: "Completed",
		attendance: "Present",
		progress: 66,
		diagnosis: "Articulation disorder (provisional)",
		assessmentSummary: "Coordination difficulties impacting handwriting endurance at school.",
		therapyPlan: "Weekly occupational therapy alongside the running speech programme.",
		packageName: "Monthly Standard — 12 Sessions",
		packageSessionsUsed: 8,
		packageSessionsTotal: 12,
		createdAt: "2026-07-17T16:00:00",
		goals: {
			sessionGoal: "Sustain a tripod grip for a 10-minute writing task.",
			targetSkills: ["Attention"],
			activities: [
				"Grip strengthening",
				"Writing endurance",
				"Core stability circuit"
			],
			materials: ["Therapy Ball"],
			expectedOutcome: "Ten minutes of continuous legible writing."
		},
		notes: {
			objectives: "Improve grip endurance and postural stability.",
			activitiesPerformed: "Putty grip work, 10-minute writing task, core circuit.",
			patientResponse: "Sustained the grip for 9 minutes before fatigue.",
			behavior: "Motivated, requested to repeat the circuit.",
			homework: "Daily putty exercises for 5 minutes.",
			recommendations: "Add a slanted writing board at school.",
			therapistNotes: "Coordinate goals with the speech therapist for combined reporting."
		},
		progressSkills: skills([
			64,
			70,
			60,
			66,
			62,
			72
		]),
		group: null,
		timeline: timeline("2026-05-12", "2026-05-19", "2026-05-26", "2026-07-24", "2026-08-14")
	},
	{
		id: "ths-1012",
		code: "THS-2026-1012",
		patientId: "ayesha-akter",
		patientName: "Ayesha Akter",
		patientCode: "PT-DHK-1002",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Shamima Begum",
		guardianPhone: "+880 1819-772140",
		branch: "Dhaka Main Branch",
		mode: "Group Therapy",
		program: "Autism Therapy",
		sessionNumber: 3,
		totalSessions: 16,
		sessionDate: "2026-08-06",
		startTime: "11:00",
		endTime: "12:00",
		room: "Room 204 — Group Hall",
		therapist: "Nusrat Jahan Mim",
		equipment: ["Bubble Kit", "PECS Communication Board"],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 32,
		diagnosis: "Expressive language delay (provisional)",
		assessmentSummary: "Reduced peer engagement and limited spontaneous social greetings.",
		therapyPlan: "Weekly social skills group with parallel individual language therapy.",
		packageName: "Session Wise — Pay per visit",
		packageSessionsUsed: 3,
		packageSessionsTotal: 16,
		createdAt: "2026-07-31T09:00:00",
		goals: {
			sessionGoal: "Greet three peers independently at circle time.",
			targetSkills: ["Social Interaction", "Communication"],
			activities: [
				"Greeting circle",
				"Shared play",
				"Group song"
			],
			materials: ["Bubble Kit", "PECS Communication Board"],
			expectedOutcome: "Three independent peer greetings."
		},
		notes: {
			objectives: "Build independent social greetings within the peer group.",
			activitiesPerformed: "Greeting circle, shared bubble play, closing song.",
			patientResponse: "Two independent greetings with one prompted.",
			behavior: "Initially hesitant, participated fully after the first activity.",
			homework: "Practise greetings with family members daily.",
			recommendations: "Pair with a familiar peer to raise confidence.",
			therapistNotes: "Progressing steadily in the group format."
		},
		progressSkills: skills([
			34,
			30,
			28,
			38,
			32,
			36
		]),
		group: {
			groupName: "Social Stars — Group C",
			sessionTopic: "Greeting peers and shared play",
			totalChildren: 4,
			present: 3,
			absent: 1,
			activities: [
				"Greeting circle",
				"Shared bubble play",
				"Group song",
				"Goodbye routine"
			],
			remarks: "Calm group energy. One child rescheduled to the evening batch.",
			members: [
				{
					id: "ayesha-akter",
					name: "Ayesha Akter",
					patientCode: "PT-DHK-1002",
					age: 5,
					attendance: "Present"
				},
				{
					id: "nusrat-jahan",
					name: "Nusrat Jahan",
					patientCode: "PT-CTG-1004",
					age: 4,
					attendance: "Present"
				},
				{
					id: "samiha-chowdhury",
					name: "Samiha Chowdhury",
					patientCode: "PT-SYL-1006",
					age: 6,
					attendance: "Present"
				},
				{
					id: "tahsin-rahman",
					name: "Tahsin Rahman",
					patientCode: "PT-DHK-1005",
					age: 11,
					attendance: "Absent"
				}
			]
		},
		timeline: timeline("2026-06-02", "2026-06-09", "2026-06-16", "2026-08-06", "2026-08-27")
	}
];
Array.from(new Set(THERAPY_SESSIONS.map((session) => session.branch))).sort();
function isToday(date) {
	return new Date(date).toDateString() === (/* @__PURE__ */ new Date(TODAY_ISO)).toDateString();
}
function isUpcoming(date) {
	return new Date(date).getTime() > (/* @__PURE__ */ new Date(TODAY_ISO)).getTime();
}
var countBy = (predicate) => String(THERAPY_SESSIONS.filter(predicate).length);
countBy((session) => isToday(session.sessionDate)), countBy((session) => session.mode === "Individual Therapy"), countBy((session) => session.mode === "Group Therapy"), countBy((session) => session.status === "Completed"), countBy((session) => session.status === "Ongoing"), countBy((session) => session.status === "Cancelled" || session.status === "Missed"), countBy((session) => isUpcoming(session.sessionDate)), String(THERAPY_SESSIONS.length);
function findTherapySession(id) {
	return THERAPY_SESSIONS.find((session) => session.id === id || session.code.toLowerCase() === id.toLowerCase());
}
function averageProgress(sessionSkills) {
	if (sessionSkills.length === 0) return 0;
	const total = sessionSkills.reduce((sum, skill) => sum + skill.value, 0);
	return Math.round(total / sessionSkills.length);
}
function formatTimeRange(start, end) {
	return `${start} – ${end}`;
}
//#endregion
export { PAYMENT_STATUS_TONE as C, THERAPY_TYPES as D, THERAPISTS$1 as E, calculateAge as O, PATIENT_STATUS_TONE as S, PROGRAM_OPTIONS_BY_THERAPY as T, GUARDIAN_RELATIONS as _, THERAPY_EQUIPMENT as a, PATIENT_KPIS as b, THERAPY_ROOMS as c, averageProgress as d, findTherapySession as f, GENDERS as g, BRANCH_OPTIONS as h, THERAPISTS as i, findPatient as k, THERAPY_STATUS_TONE as l, BLOOD_GROUPS as m, ATTENDANCE_TONE as n, THERAPY_MODES as o, formatTimeRange as p, SESSION_GOAL_SKILLS as r, THERAPY_PROGRAMS as s, router_exports as t, TODAY_ISO as u, PATIENTS as v, PAYMENT_TYPES as w, PATIENT_STATUSES as x, PATIENT_DATE_RANGES as y };
