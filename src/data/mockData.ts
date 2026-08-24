import type { Course, DashboardData, ProfileField, Stat, Student, Task } from '../types'

export const student: Student = {
  name: { ar: 'سلطان', en: 'Sultan' },
  fullName: { ar: 'سلطان بن راشد العامري', en: 'Sultan Rashid Al Amri' },
  role: { ar: 'الطالب', en: 'Student' },
  avatarInitial: { ar: 'س', en: 'S' },
  studentId: '2021/UFM/4417',
  email: 'sultan.alamri@ufm.edu.om',
  college: {
    ar: 'كلية الهندسة وعلوم الحاسب',
    en: 'College of Engineering & Computer Science',
  },
  major: { ar: 'هندسة الذكاء الاصطناعي', en: 'Artificial Intelligence Engineering' },
  level: { ar: 'المستوى الرابع — الفصل الأول', en: 'Year 4 — First semester' },
  advisor: { ar: 'م. سارة الفهدي', en: 'Eng. Sara Al Fahdi' },
  joinedAt: { ar: 'سبتمبر 2021', en: 'September 2021' },
}

const stats: Stat[] = [
  { id: 'enrolled', labelKey: 'stats.enrolled', value: '6' },
  { id: 'progress', labelKey: 'stats.progress', value: '63%' },
  { id: 'lessons', labelKey: 'stats.lessons', value: '24' },
  { id: 'badges', labelKey: 'stats.badges', value: '12' },
]

/** إحصائيات أكاديمية تظهر في الملف الشخصي (نفس مكوّن StatsRow). */
export const profileStats: Stat[] = [
  { id: 'gpa', labelKey: 'profile.statGpa', value: '3.72' },
  { id: 'credits', labelKey: 'profile.statCredits', value: '96' },
  { id: 'courses', labelKey: 'stats.enrolled', value: '6' },
  { id: 'badges', labelKey: 'stats.badges', value: '12' },
]

export const academicFields: ProfileField[] = [
  { id: 'college', labelKey: 'profile.fieldCollege', value: student.college },
  { id: 'major', labelKey: 'profile.fieldMajor', value: student.major },
  { id: 'level', labelKey: 'profile.fieldLevel', value: student.level },
  { id: 'advisor', labelKey: 'profile.fieldAdvisor', value: student.advisor },
  { id: 'joined', labelKey: 'profile.fieldJoined', value: student.joinedAt },
]

export const tasks: Task[] = [
  {
    id: 't-1',
    title: { ar: 'واجب: تصنيف الصور — الفصل 4', en: 'Assignment: Image classification — Ch. 4' },
    dueLabel: { ar: 'يُسلَّم غدًا', en: 'Due tomorrow' },
    courseId: 'machine-vision',
    icon: 'assignment',
    tone: 'blue',
  },
  {
    id: 't-2',
    title: { ar: 'اختبار قصير نصفي', en: 'Midterm short quiz' },
    dueLabel: { ar: 'متاح خلال 3 أيام', en: 'Opens in 3 days' },
    courseId: 'machine-vision',
    icon: 'quiz',
    tone: 'violet',
  },
  {
    id: 't-3',
    title: { ar: 'مراجعة شاملة على الذكاء الاصطناعي', en: 'Full AI revision session' },
    dueLabel: { ar: 'متاح خلال 5 أيام', en: 'Opens in 5 days' },
    courseId: 'ai-foundations',
    icon: 'review',
    tone: 'green',
  },
]

// عناصر متكرّرة — تُعرَّف مرة واحدة وتُعاد في أكثر من وحدة
const lectureTheory = { ar: 'محاضرات 1 نظري', en: 'Lecture 1 — theory' }
const kickerLesson = { ar: 'مؤشر', en: 'Lesson' }
const kickerActivity = { ar: 'الأنشطة', en: 'Activity' }
const kickerQuiz = { ar: 'اختبار', en: 'Quiz' }

export const courses: Course[] = [
  {
    id: 'machine-vision',
    code: 'UFM/FC9-15-3',
    titleLatin: 'Machine Vision',
    title: {
      ar: 'مدخل إلى مفهوم الذكاء الاصطناعي',
      en: 'Introduction to artificial intelligence',
    },
    description: {
      ar: 'دراسة مدخل إلى أسس الذكاء الاصطناعي وتطبيقاته في الرؤية الحاسوبية.',
      en: 'An introduction to the foundations of AI and its applications in computer vision.',
    },
    instructor: { ar: 'م. سارة الفهدي', en: 'Eng. Sara Al Fahdi' },
    instructorTitle: {
      ar: 'أستاذ مساعد — كلية الهندسة، أستاذ مقرر',
      en: 'Assistant professor — College of Engineering, course lead',
    },
    progress: 61,
    completionThreshold: 75,
    completionNote: {
      ar: 'يجب تحقيق نسبة لا تقل عن 75% في جميع المحاضرات والاختبارات لاعتبار المقرر مكتملًا بنجاح.',
      en: 'You need at least 75% across all lectures and quizzes to pass this course.',
    },
    tone: 'violet',
    lessonsDone: 11,
    lessonsTotal: 18,
    units: [
      {
        id: 'mv-u1',
        order: 1,
        title: { ar: 'أساسيات الرؤية', en: 'Vision fundamentals' },
        status: 'completed',
        items: [
          {
            id: 'mv-u1-i1',
            kicker: kickerLesson,
            title: lectureTheory,
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
          {
            id: 'mv-u1-i2',
            kicker: kickerActivity,
            title: { ar: 'تمرين معالجة الصورة', en: 'Image processing exercise' },
            status: 'completed',
            tone: 'teal',
            icon: 'activity',
          },
        ],
      },
      {
        id: 'mv-u2',
        order: 2,
        title: { ar: 'التعلم الشخصي', en: 'Personalised learning' },
        status: 'available',
        items: [
          {
            id: 'mv-u2-i1',
            kicker: kickerActivity,
            title: { ar: 'محاضرات 1 اختبار', en: 'Lecture 1 — quiz' },
            status: 'completed',
            tone: 'orange',
            icon: 'quiz',
          },
          {
            id: 'mv-u2-i2',
            kicker: kickerLesson,
            title: { ar: 'محاضرات 2 عملي', en: 'Lecture 2 — lab' },
            status: 'available',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
      {
        id: 'mv-u3',
        order: 3,
        title: { ar: 'اكتشاف الكائنات', en: 'Object detection' },
        status: 'locked',
        lockNote: { ar: 'واجب', en: 'Assignment' },
        items: [
          {
            id: 'mv-u3-i1',
            kicker: kickerQuiz,
            title: { ar: 'نموذج 4 اختبار', en: 'Model 4 — quiz' },
            status: 'locked',
            tone: 'pink',
            icon: 'star',
          },
        ],
      },
      {
        id: 'mv-u4',
        order: 4,
        title: { ar: 'تطبيقات متقدمة', en: 'Advanced applications' },
        status: 'locked',
        lockNote: {
          ar: 'أكمل الوحدات السابقة لفتح هذه الوحدة',
          en: 'Finish the previous units to unlock',
        },
        items: [],
      },
    ],
  },
  {
    id: 'ai-foundations',
    code: 'UFM/AI1-10-1',
    titleLatin: 'AI Foundations',
    title: { ar: 'أساسيات الذكاء الاصطناعي', en: 'Foundations of AI' },
    description: {
      ar: 'مقدمة في خوارزميات التعلم الآلي والشبكات العصبية وتطبيقاتها العملية.',
      en: 'An intro to machine learning algorithms, neural networks and their practical uses.',
    },
    instructor: { ar: 'د. خالد البلوشي', en: 'Dr. Khalid Al Balushi' },
    instructorTitle: {
      ar: 'أستاذ مشارك — كلية علوم الحاسب',
      en: 'Associate professor — College of Computer Science',
    },
    progress: 82,
    completionThreshold: 70,
    completionNote: {
      ar: 'يجب إتمام جميع الوحدات وتسليم المشروع النهائي قبل نهاية الفصل.',
      en: 'Finish every unit and submit the final project before the term ends.',
    },
    tone: 'blue',
    lessonsDone: 14,
    lessonsTotal: 17,
    units: [
      {
        id: 'ai-u1',
        order: 1,
        title: { ar: 'مقدمة في التعلم الآلي', en: 'Intro to machine learning' },
        status: 'completed',
        items: [
          {
            id: 'ai-u1-i1',
            kicker: kickerLesson,
            title: lectureTheory,
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
      {
        id: 'ai-u2',
        order: 2,
        title: { ar: 'الشبكات العصبية', en: 'Neural networks' },
        status: 'available',
        items: [
          {
            id: 'ai-u2-i1',
            kicker: kickerActivity,
            title: { ar: 'تمرين RNN و CNN', en: 'RNN & CNN exercise' },
            status: 'available',
            tone: 'orange',
            icon: 'activity',
          },
        ],
      },
    ],
  },
  {
    id: 'data-structures',
    code: 'UFM/CS2-20-4',
    titleLatin: 'Data Structures',
    title: { ar: 'هياكل البيانات والخوارزميات', en: 'Data structures & algorithms' },
    description: {
      ar: 'القوائم والأشجار والرسوم البيانية وتحليل تعقيد الخوارزميات.',
      en: 'Lists, trees, graphs and algorithmic complexity analysis.',
    },
    instructor: { ar: 'د. منى الحارثي', en: 'Dr. Muna Al Harthy' },
    instructorTitle: {
      ar: 'أستاذ مساعد — كلية علوم الحاسب',
      en: 'Assistant professor — College of Computer Science',
    },
    progress: 45,
    completionThreshold: 75,
    completionNote: {
      ar: 'يجب حل جميع تمارين المعمل بنسبة 75% على الأقل.',
      en: 'Complete all lab exercises with at least 75%.',
    },
    tone: 'orange',
    lessonsDone: 9,
    lessonsTotal: 20,
    units: [
      {
        id: 'ds-u1',
        order: 1,
        title: { ar: 'القوائم المترابطة', en: 'Linked lists' },
        status: 'completed',
        items: [
          {
            id: 'ds-u1-i1',
            kicker: kickerLesson,
            title: lectureTheory,
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
      {
        id: 'ds-u2',
        order: 2,
        title: { ar: 'الأشجار والرسوم', en: 'Trees & graphs' },
        status: 'locked',
        lockNote: { ar: 'أكمل الوحدة السابقة', en: 'Finish the previous unit' },
        items: [],
      },
    ],
  },
  {
    id: 'linear-algebra',
    code: 'UFM/MT1-05-2',
    titleLatin: 'Linear Algebra',
    title: { ar: 'الجبر الخطي', en: 'Linear algebra' },
    description: {
      ar: 'المصفوفات والفضاءات المتجهية والقيم الذاتية وتطبيقاتها في الذكاء الاصطناعي.',
      en: 'Matrices, vector spaces, eigenvalues and their role in AI.',
    },
    instructor: { ar: 'د. عبدالله الكندي', en: 'Dr. Abdullah Al Kindi' },
    instructorTitle: { ar: 'أستاذ — كلية العلوم', en: 'Professor — College of Science' },
    progress: 100,
    completionThreshold: 70,
    completionNote: {
      ar: 'تم إكمال جميع متطلبات المقرر.',
      en: 'All course requirements are complete.',
    },
    tone: 'green',
    lessonsDone: 12,
    lessonsTotal: 12,
    units: [
      {
        id: 'la-u1',
        order: 1,
        title: { ar: 'المصفوفات', en: 'Matrices' },
        status: 'completed',
        items: [
          {
            id: 'la-u1-i1',
            kicker: kickerLesson,
            title: lectureTheory,
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
    ],
  },
  {
    id: 'nlp',
    code: 'UFM/AI3-30-1',
    titleLatin: 'Natural Language Processing',
    title: { ar: 'معالجة اللغات الطبيعية', en: 'Natural language processing' },
    description: {
      ar: 'تمثيل النصوص والنماذج اللغوية الكبيرة وتطبيقات المحادثة الذكية.',
      en: 'Text representation, large language models and conversational applications.',
    },
    instructor: { ar: 'د. ريم الزدجالي', en: 'Dr. Reem Al Zadjali' },
    instructorTitle: {
      ar: 'أستاذ مساعد — كلية علوم الحاسب',
      en: 'Assistant professor — College of Computer Science',
    },
    progress: 18,
    completionThreshold: 75,
    completionNote: {
      ar: 'المقرر في بدايته — تابع الجدول الأسبوعي.',
      en: 'The course just started — follow the weekly schedule.',
    },
    tone: 'pink',
    lessonsDone: 3,
    lessonsTotal: 16,
    units: [
      {
        id: 'nlp-u1',
        order: 1,
        title: { ar: 'تمثيل النصوص', en: 'Text representation' },
        status: 'available',
        items: [
          {
            id: 'nlp-u1-i1',
            kicker: kickerLesson,
            title: lectureTheory,
            status: 'available',
            tone: 'blue',
            icon: 'reading',
          },
        ],
      },
    ],
  },
  {
    id: 'ethics',
    code: 'UFM/GE4-01-1',
    titleLatin: 'AI Ethics',
    title: { ar: 'أخلاقيات الذكاء الاصطناعي', en: 'AI ethics' },
    description: {
      ar: 'الحوكمة والتحيز والخصوصية والمسؤولية في أنظمة الذكاء الاصطناعي.',
      en: 'Governance, bias, privacy and accountability in AI systems.',
    },
    instructor: { ar: 'د. هدى الشحي', en: 'Dr. Huda Al Shehhi' },
    instructorTitle: {
      ar: 'أستاذ مشارك — كلية الحقوق',
      en: 'Associate professor — College of Law',
    },
    progress: 55,
    completionThreshold: 60,
    completionNote: {
      ar: 'يجب تسليم ورقة بحثية واحدة على الأقل.',
      en: 'Submit at least one research paper.',
    },
    tone: 'teal',
    lessonsDone: 6,
    lessonsTotal: 11,
    units: [
      {
        id: 'et-u1',
        order: 1,
        title: { ar: 'مبادئ الحوكمة', en: 'Governance principles' },
        status: 'completed',
        items: [
          {
            id: 'et-u1-i1',
            kicker: kickerLesson,
            title: lectureTheory,
            status: 'completed',
            tone: 'blue',
            icon: 'reading',
          },
        ],
      },
    ],
  },
]

export const dashboardData: DashboardData = {
  student,
  stats,
  continueLearning: {
    courseId: 'machine-vision',
    courseTitle: 'Machine Vision',
    unitLabel: {
      ar: 'تابع الوحدة 2: التعلم الشخصي',
      en: 'Resume unit 2: Personalised learning',
    },
    progress: 63,
  },
  tasks,
}

/** نفس شكل البيانات لكن فاضية — تُستخدم لعرض حالة Empty State */
export const emptyDashboardData: DashboardData = {
  student,
  stats: [],
  continueLearning: null,
  tasks: [],
}

export const findCourse = (id: string): Course | undefined =>
  courses.find((course) => course.id === id)
