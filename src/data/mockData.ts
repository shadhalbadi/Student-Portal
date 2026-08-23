import type { Course, DashboardData, Stat, Student, Task } from '../types'

export const student: Student = {
  name: 'سلطان',
  role: 'الطالب',
  avatarInitial: 'س',
}

const stats: Stat[] = [
  { id: 'enrolled', label: 'المقررات المسجلة', value: '6' },
  { id: 'progress', label: 'إجمالي التقدم', value: '63%' },
  { id: 'lessons', label: 'الدروس المكتملة', value: '24' },
  { id: 'badges', label: 'الشارات', value: '12' },
]

export const tasks: Task[] = [
  {
    id: 't-1',
    title: 'واجب: تصنيف الصور — الفصل 4',
    dueLabel: 'يُسلَّم غدًا',
    courseId: 'machine-vision',
    icon: 'assignment',
    tone: 'blue',
  },
  {
    id: 't-2',
    title: 'اختبار قصير نصفي',
    dueLabel: 'متاح خلال 3 أيام',
    courseId: 'machine-vision',
    icon: 'quiz',
    tone: 'violet',
  },
  {
    id: 't-3',
    title: 'مراجعة شاملة على الذكاء الاصطناعي',
    dueLabel: 'متاح خلال 5 أيام',
    courseId: 'ai-foundations',
    icon: 'review',
    tone: 'green',
  },
]

export const courses: Course[] = [
  {
    id: 'machine-vision',
    code: 'UFM/FC9-15-3',
    titleEn: 'Machine Vision',
    titleAr: 'مدخل إلى مفهوم الذكاء الاصطناعي',
    description: 'دراسة مدخل إلى أسس الذكاء الاصطناعي وتطبيقاته في الرؤية الحاسوبية.',
    instructor: 'م. سارة الفهدي',
    instructorTitle: 'أستاذ مساعد — كلية الهندسة، أستاذ مقرر',
    progress: 61,
    completionThreshold: 75,
    completionNote:
      'يجب تحقيق نسبة لا تقل عن 75% في جميع المحاضرات والاختبارات لاعتبار المقرر مكتملًا بنجاح.',
    tone: 'violet',
    lessonsDone: 11,
    lessonsTotal: 18,
    units: [
      {
        id: 'mv-u1',
        order: 1,
        title: 'أساسيات الرؤية',
        status: 'completed',
        items: [
          {
            id: 'mv-u1-i1',
            kicker: 'مؤشر',
            title: 'محاضرات 1 نظري',
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
          {
            id: 'mv-u1-i2',
            kicker: 'الأنشطة',
            title: 'تمرين معالجة الصورة',
            status: 'completed',
            tone: 'teal',
            icon: 'activity',
          },
        ],
      },
      {
        id: 'mv-u2',
        order: 2,
        title: 'التعلم الشخصي',
        status: 'available',
        items: [
          {
            id: 'mv-u2-i1',
            kicker: 'الأنشطة',
            title: 'محاضرات 1 اختبار',
            status: 'completed',
            tone: 'orange',
            icon: 'quiz',
          },
          {
            id: 'mv-u2-i2',
            kicker: 'مؤشر',
            title: 'محاضرات 2 عملي',
            status: 'available',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
      {
        id: 'mv-u3',
        order: 3,
        title: 'اكتشاف الكائنات',
        status: 'locked',
        lockNote: 'واجب',
        items: [
          {
            id: 'mv-u3-i1',
            kicker: 'اختبار',
            title: 'نموذج 4 اختبار',
            status: 'locked',
            tone: 'pink',
            icon: 'star',
          },
        ],
      },
      {
        id: 'mv-u4',
        order: 4,
        title: 'تطبيقات متقدمة',
        status: 'locked',
        lockNote: 'أكمل الوحدات السابقة لفتح هذه الوحدة',
        items: [],
      },
    ],
  },
  {
    id: 'ai-foundations',
    code: 'UFM/AI1-10-1',
    titleEn: 'AI Foundations',
    titleAr: 'أساسيات الذكاء الاصطناعي',
    description: 'مقدمة في خوارزميات التعلم الآلي والشبكات العصبية وتطبيقاتها العملية.',
    instructor: 'د. خالد البلوشي',
    instructorTitle: 'أستاذ مشارك — كلية علوم الحاسب',
    progress: 82,
    completionThreshold: 70,
    completionNote: 'يجب إتمام جميع الوحدات وتسليم المشروع النهائي قبل نهاية الفصل.',
    tone: 'blue',
    lessonsDone: 14,
    lessonsTotal: 17,
    units: [
      {
        id: 'ai-u1',
        order: 1,
        title: 'مقدمة في التعلم الآلي',
        status: 'completed',
        items: [
          {
            id: 'ai-u1-i1',
            kicker: 'مؤشر',
            title: 'محاضرات 1 نظري',
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
      {
        id: 'ai-u2',
        order: 2,
        title: 'الشبكات العصبية',
        status: 'available',
        items: [
          {
            id: 'ai-u2-i1',
            kicker: 'الأنشطة',
            title: 'تمرين RNN و CNN',
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
    titleEn: 'Data Structures',
    titleAr: 'هياكل البيانات والخوارزميات',
    description: 'القوائم والأشجار والرسوم البيانية وتحليل تعقيد الخوارزميات.',
    instructor: 'د. منى الحارثي',
    instructorTitle: 'أستاذ مساعد — كلية علوم الحاسب',
    progress: 45,
    completionThreshold: 75,
    completionNote: 'يجب حل جميع تمارين المعمل بنسبة 75% على الأقل.',
    tone: 'orange',
    lessonsDone: 9,
    lessonsTotal: 20,
    units: [
      {
        id: 'ds-u1',
        order: 1,
        title: 'القوائم المترابطة',
        status: 'completed',
        items: [
          {
            id: 'ds-u1-i1',
            kicker: 'مؤشر',
            title: 'محاضرات 1 نظري',
            status: 'completed',
            tone: 'blue',
            icon: 'video',
          },
        ],
      },
      {
        id: 'ds-u2',
        order: 2,
        title: 'الأشجار والرسوم',
        status: 'locked',
        lockNote: 'أكمل الوحدة السابقة',
        items: [],
      },
    ],
  },
  {
    id: 'linear-algebra',
    code: 'UFM/MT1-05-2',
    titleEn: 'Linear Algebra',
    titleAr: 'الجبر الخطي',
    description: 'المصفوفات والفضاءات المتجهية والقيم الذاتية وتطبيقاتها في الذكاء الاصطناعي.',
    instructor: 'د. عبدالله الكندي',
    instructorTitle: 'أستاذ — كلية العلوم',
    progress: 100,
    completionThreshold: 70,
    completionNote: 'تم إكمال جميع متطلبات المقرر.',
    tone: 'green',
    lessonsDone: 12,
    lessonsTotal: 12,
    units: [
      {
        id: 'la-u1',
        order: 1,
        title: 'المصفوفات',
        status: 'completed',
        items: [
          {
            id: 'la-u1-i1',
            kicker: 'مؤشر',
            title: 'محاضرات 1 نظري',
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
    titleEn: 'Natural Language Processing',
    titleAr: 'معالجة اللغات الطبيعية',
    description: 'تمثيل النصوص والنماذج اللغوية الكبيرة وتطبيقات المحادثة الذكية.',
    instructor: 'د. ريم الزدجالي',
    instructorTitle: 'أستاذ مساعد — كلية علوم الحاسب',
    progress: 18,
    completionThreshold: 75,
    completionNote: 'المقرر في بدايته — تابع الجدول الأسبوعي.',
    tone: 'pink',
    lessonsDone: 3,
    lessonsTotal: 16,
    units: [
      {
        id: 'nlp-u1',
        order: 1,
        title: 'تمثيل النصوص',
        status: 'available',
        items: [
          {
            id: 'nlp-u1-i1',
            kicker: 'مؤشر',
            title: 'محاضرات 1 نظري',
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
    titleEn: 'AI Ethics',
    titleAr: 'أخلاقيات الذكاء الاصطناعي',
    description: 'الحوكمة والتحيز والخصوصية والمسؤولية في أنظمة الذكاء الاصطناعي.',
    instructor: 'د. هدى الشحي',
    instructorTitle: 'أستاذ مشارك — كلية الحقوق',
    progress: 55,
    completionThreshold: 60,
    completionNote: 'يجب تسليم ورقة بحثية واحدة على الأقل.',
    tone: 'teal',
    lessonsDone: 6,
    lessonsTotal: 11,
    units: [
      {
        id: 'et-u1',
        order: 1,
        title: 'مبادئ الحوكمة',
        status: 'completed',
        items: [
          {
            id: 'et-u1-i1',
            kicker: 'مؤشر',
            title: 'محاضرات 1 نظري',
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
    unitLabel: 'تابع الوحدة 2: التعلم الشخصي',
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
