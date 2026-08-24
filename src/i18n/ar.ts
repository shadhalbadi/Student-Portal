/**
 * القاموس العربي — وهو المصدر الذي تُستمد منه المفاتيح.
 * أي مفتاح يُضاف هنا يصبح إلزاميًا في `en.ts` (خطأ ترجمة عند البناء).
 * الوسوم بين قوسين معقوفين مثل {name} تُستبدل عند الاستدعاء.
 */
export const ar = {
  // ── التنقّل والهيكل ────────────────────────────────────────────────
  'app.name': 'EduMentor AI',
  'app.title': 'EduMentor AI — بوابة الطالب',
  'app.tagline': 'منصة التعلّم الذكية',
  'nav.dashboard': 'لوحة الطالب',
  'nav.subjects': 'المقررات',
  'nav.guide': 'الدليل التفاعلي',
  'nav.assistant': 'المساعد الذكي',
  'nav.activity': 'سجل النشاط',
  'nav.badges': 'الشارات',
  'nav.profile': 'الملف الشخصي',
  'nav.openMenu': 'فتح القائمة',
  'nav.closeMenu': 'إغلاق القائمة',
  'nav.search': 'بحث',
  'nav.searchPlaceholder': 'ابحث عن مقرر أو درس...',
  'nav.termProgress': 'تقدّمك هذا الفصل',
  'nav.termProgressNote': 'باقي {count} وحدات لإكمال المسار الحالي.',
  'nav.language': 'اللغة',

  // ── قائمة المستخدم ────────────────────────────────────────────────
  'user.settings': 'الإعدادات',
  'user.logout': 'تسجيل الخروج',

  // ── الإشعارات ─────────────────────────────────────────────────────
  'notifications.title': 'الإشعارات',
  'notifications.unreadLabel': 'الإشعارات، {count} غير مقروء',
  'notifications.markAllRead': 'تعليم الكل كمقروء',
  'notifications.emptyTitle': 'ما فيه إشعارات',
  'notifications.emptyBody': 'كل شي محدّث — نبلّغك أول ما يوصل جديد.',

  // ── حالات عامة ────────────────────────────────────────────────────
  'state.label': 'الحالة',
  'state.ready': 'بيانات',
  'state.loading': 'تحميل',
  'state.empty': 'فاضي',
  'state.loadingData': 'جارٍ تحميل البيانات',
  'status.completed': 'مكتمل',
  'status.available': 'متاح',
  'status.locked': 'مقفل',

  // ── لوحة الطالب ───────────────────────────────────────────────────
  'dashboard.welcome': 'مرحباً {name}!',
  'dashboard.welcomeSub': 'استمر في رحلتك التعليمية الذكية',
  'dashboard.loading': 'جارٍ تحميل لوحة الطالب',
  'stats.enrolled': 'المقررات المسجلة',
  'stats.progress': 'إجمالي التقدم',
  'stats.lessons': 'الدروس المكتملة',
  'stats.badges': 'الشارات',
  'stats.emptyTitle': 'لا توجد إحصائيات بعد',
  'stats.emptyBody': 'سجّل في أول مقرر وستظهر هنا نسبة تقدّمك ودروسك المكتملة.',
  'continue.title': 'مواصلة التعلم',
  'continue.cta': 'متابعة التعلم',
  'continue.emptyTitle': 'ما بدأت أي مقرر',
  'continue.emptyBody': 'اختر مقررًا من قائمة المقررات وابدأ أول وحدة.',
  'continue.emptyCta': 'استعرض المقررات',
  'tasks.title': 'المهام القادمة',
  'tasks.viewAll': 'عرض جميع المهام',
  'tasks.emptyTitle': 'لا مهام قادمة',
  'tasks.emptyBody': 'خلصت كل واجباتك واختباراتك — استمتع بوقتك!',

  // ── المقررات ──────────────────────────────────────────────────────
  'subjects.title': 'المقررات',
  'subjects.count': '{count} مقررات مسجلة هذا الفصل',
  'subjects.loading': 'جارٍ تحميل مقرراتك...',
  'subjects.loadingList': 'جارٍ تحميل المقررات',
  'subjects.filterAll': 'الكل',
  'subjects.filterActive': 'قيد الدراسة',
  'subjects.filterDone': 'مكتملة',
  'subjects.statusDone': 'مكتمل',
  'subjects.statusActive': 'قيد الدراسة',
  'subjects.lessonsOf': '{done} من {total} درسًا',
  'subjects.details': 'تفاصيل المقرر',
  'subjects.emptyTitle': 'لا توجد مقررات مسجلة',
  'subjects.emptyBody':
    'ما سُجّلت في أي مقرر بعد. راجع مرشدك الأكاديمي أو انتظر فتح التسجيل للفصل القادم.',
  'subjects.filterEmptyTitle': 'ما فيه مقررات بهذا الفلتر',
  'subjects.filterEmptyBody': 'جرّب فلترًا ثانيًا لعرض بقية المقررات.',

  // ── تفاصيل المقرر ─────────────────────────────────────────────────
  'course.backToAll': 'كل المقررات',
  'course.prefix': 'دورة:',
  'course.loading': 'جارٍ تحميل بيانات المقرر',
  'course.tabOverview': 'نظرة عامة',
  'course.tabContent': 'المحتوى',
  'course.tabAssignments': 'الواجبات',
  'course.tabQuizzes': 'الاختبارات',
  'course.unit': 'الوحدة {order} – {title}',
  'course.unitLockedBody': 'محتوى هذه الوحدة يُفتح بعد إكمال الوحدات السابقة.',
  'course.unitsEmptyTitle': 'ما نُشرت وحدات بعد',
  'course.unitsEmptyBody': 'أستاذ المقرر لم يضف محتوى الوحدات حتى الآن. راجع الصفحة لاحقًا.',
  'course.assignmentsEmptyTitle': 'لا توجد واجبات',
  'course.assignmentsEmptyBody': 'ما فيه واجبات مطلوبة في هذا المقرر حاليًا.',
  'course.quizzesEmptyTitle': 'لا اختبارات منشورة',
  'course.quizzesEmptyBody': 'سيظهر هنا كل اختبار يفتحه أستاذ المقرر مع موعده ودرجته.',
  'course.notFoundTitle': 'المقرر غير موجود',
  'course.notFoundBody': 'الرابط الذي فتحته لا يشير إلى مقرر مسجّل باسمك.',
  'course.notFoundCta': 'رجوع إلى المقررات',
  'course.infoTitle': 'معلومات المقرر',
  'course.instructorBadge': 'رسالة',
  'course.requirementsTitle': 'متطلبات إكمال المقرر',
  'course.viewRequirements': 'عرض جميع المتطلبات',
  'course.currentProgress': 'نسبة الدورة الحالية',
  'course.completedLessons': 'أكملت {done} من {total} درسًا.',

  // ── الدليل التفاعلي ───────────────────────────────────────────────
  'guide.loading': 'جارٍ تحميل أدوات الدليل',
  'guide.viewAll': 'عرض كل الأدوات',
  'guide.emptyTitle': 'لا توجد أدوات متاحة',
  'guide.emptyBody': 'لم تُفتح أدوات الدليل التفاعلي لمقرراتك الحالية بعد.',

  // ── المساعد الذكي ─────────────────────────────────────────────────
  'assistant.minimize': 'تصغير',
  'assistant.close': 'إغلاق',
  'assistant.send': 'إرسال',
  'assistant.inputPlaceholder': 'اكتب سؤالك هنا...',
  'assistant.loading': 'جارٍ تحميل المحادثة',
  'assistant.emptyTitle': 'ابدأ محادثة جديدة',
  'assistant.emptyBody': 'اسأل عن أي درس أو مفهوم في مقرراتك، واختر أحد الاقتراحات بالأسفل للبدء.',

  // ── سجل النشاط ────────────────────────────────────────────────────
  'activity.title': 'سجل النشاط',
  'activity.subtitle': 'عرض نشاطك وتفاعلاتك التعليمية بالتفصيل',
  'activity.loading': 'جارٍ تحميل سجل النشاط',
  'activity.filterTitle': 'تصفية',
  'activity.export': 'تصدير السجل',
  'activity.exportShort': 'تصدير',
  'activity.viewMore': 'عرض المزيد من النشاط',
  'activity.emptyTitle': 'لا يوجد نشاط مسجّل',
  'activity.emptyBody': 'ابدأ بمشاهدة درس أو حل اختبار قصير وسيظهر نشاطك هنا.',
  'activity.filterEmptyTitle': 'ما فيه نشاط بهذا الفلتر',
  'activity.filterEmptyBody': 'جرّب فلترًا ثانيًا أو اختر "كل الأنشطة".',

  // ── الشارات ───────────────────────────────────────────────────────
  'badges.title': 'الشارات',
  'badges.count': 'اكتسبت {earned} من {total} شارات',
  'badges.loading': 'جارٍ تحميل الشارات',
  'badges.loadingShort': 'جارٍ تحميل شاراتك...',
  'badges.earnedAt': 'مكتسبة · {when}',
  'badges.emptyTitle': 'ما اكتسبت شارات بعد',
  'badges.emptyBody': 'أكمل دروسًا واختبارات قصيرة وستبدأ الشارات بالظهور هنا.',

  // ── الملف الشخصي ──────────────────────────────────────────────────
  'profile.loading': 'جارٍ تحميل الملف الشخصي',
  'profile.edit': 'تعديل الملف',
  'profile.studentId': 'رقم الطالب:',
  'profile.academicTitle': 'المعلومات الأكاديمية',
  'profile.academicEmptyTitle': 'ما فيه بيانات أكاديمية',
  'profile.academicEmptyBody': 'سجّل في مقررات هذا الفصل وتظهر معلوماتك الأكاديمية هنا.',
  'profile.badgesTitle': 'أحدث الشارات',
  'profile.badgesEmptyTitle': 'ما اكتسبت شارات بعد',
  'profile.badgesEmptyBody': 'أكمل دروسًا واختبارات وتبدأ الشارات بالظهور هنا.',
  'profile.viewAllBadges': 'عرض جميع الشارات',
  'profile.fieldCollege': 'الكلية',
  'profile.fieldMajor': 'التخصص',
  'profile.fieldLevel': 'المستوى',
  'profile.fieldAdvisor': 'المرشد الأكاديمي',
  'profile.fieldJoined': 'تاريخ الانتساب',
  'profile.statGpa': 'المعدل التراكمي',
  'profile.statCredits': 'الساعات المكتسبة',

  // ── أخرى ──────────────────────────────────────────────────────────
  'illustration.robot': 'روبوت EduMentor AI',
  'activityFilter.all': 'كل الأنشطة',
  'activityFilter.watched': 'الدروس التي تمت مشاهدتها',
  'activityFilter.chat': 'محادثات الذكاء الاصطناعي',
  'activityFilter.quiz': 'الاختبارات القصيرة',
  'activityFilter.attempt': 'محاولات الاختبارات',
  'activityFilter.progress': 'التقدم والإنجازات',
  'activityFilter.badge': 'الشارات',
} as const

export type TranslationKey = keyof typeof ar
