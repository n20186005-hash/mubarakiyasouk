import type { Lang } from '../i18n/ui';

type LocalizedText = {
  ar: string;
  en: string;
};

type GuideHighlight = {
  label: LocalizedText;
  value: LocalizedText;
};

type GuideSection = {
  title: LocalizedText;
  body: LocalizedText;
  bullets?: LocalizedText[];
};

export type GuidePage = {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  seoTitle: LocalizedText;
  description: LocalizedText;
  hero: LocalizedText;
  intro: LocalizedText;
  highlights: GuideHighlight[];
  sections: GuideSection[];
  verify: LocalizedText;
  related: string[];
};

const l = (ar: string, en: string): LocalizedText => ({ ar, en });

export const GUIDE_PAGES: GuidePage[] = [
  {
    slug: 'visit/opening-hours',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('ساعات عمل سوق المباركية', 'Souk Al-Mubarakiya opening hours'),
    seoTitle: l('ساعات عمل سوق المباركية | دليل الزيارة', 'Souk Al-Mubarakiya opening hours | Visitor guide'),
    description: l(
      'متى يفتح سوق المباركية ومتى تكون الزيارة أنسب؟ دليل مستقل يشرح ساعات منطقة السوق العامة وما الذي قد يختلف بين المحلات والمطاعم.',
      'When does Souk Al-Mubarakiya open and what timing is most practical? An independent guide to the general market-area hours and what may differ by shop or eatery.'
    ),
    hero: l(
      'هذه الصفحة تجمع ما يحتاجه الزائر قبل الانطلاق: ساعات منطقة السوق العامة، أفضل فترات الوصول، وما الذي ينبغي التحقق منه مباشرة في يوم الزيارة.',
      'This page brings together the basics before you set out: the general market-area hours, the most practical visit windows, and what still needs checking on the day.'
    ),
    intro: l(
      'السوق منطقة حيّة لا تعمل كوحدة واحدة؛ لذلك يجب التفريق بين ساعات المنطقة العامة وساعات المتاجر والمطاعم والمرافق المنفردة.',
      'The souk is a living district rather than a single timed venue, so it helps to separate the general market-area hours from the operating hours of individual shops, eateries and services.'
    ),
    highlights: [
      { label: l('مرجع عام', 'General reference'), value: l('08:00–22:00 يوميًا', '08:00–22:00 daily') },
      { label: l('الأكثر راحة', 'Most comfortable'), value: l('الصباح أو بعد العصر', 'Morning or late afternoon') },
      { label: l('ملاحظة مهمة', 'Important note'), value: l('المحلات تختلف عن بعضها', 'Individual shops vary') }
    ],
    sections: [
      {
        title: l('كيف نقرأ هذه الساعات؟', 'How should these hours be read?'),
        body: l(
          'الساعات المتداولة تشير إلى نشاط المنطقة عمومًا، لا إلى التزام كل محل داخلها بنفس الإغلاق والافتتاح.',
          'Published hours describe the district in general, not a guarantee that every business inside follows the same opening and closing time.'
        ),
        bullets: [
          l('المقاهي والمطاعم قد تمتد لوقت أطول مساءً', 'Cafes and dining spots may stay active later in the evening'),
          l('بعض المتاجر تفتح لاحقًا بعد الظهر', 'Some shops begin later in the day'),
          l('العطلات والمناسبات قد تغيّر الإيقاع المعتاد', 'Holidays and special occasions can alter the usual rhythm')
        ]
      },
      {
        title: l('أفضل وقت عملي للزيارة', 'The most practical visit window'),
        body: l(
          'إذا كان هدفك المشي الهادئ والتصوير، فالصباح أنسب. وإذا كان هدفك الأجواء الحيوية والطعام، فالفترة من بعد العصر إلى المساء عادة أفضل.',
          'If your goal is a calmer walk and easier photography, mornings are usually better. If you want atmosphere and food, the late-afternoon-to-evening window is often the stronger choice.'
        )
      },
      {
        title: l('متى يحتاج الزائر إلى تحقق إضافي؟', 'When is an extra check worth it?'),
        body: l(
          'تحقق مباشرة عندما تعتمد على متجر بعينه، أو تحتاج موقفًا أو دورة مياه أو مطعمًا محددًا في ساعة متأخرة.',
          'Check directly when you depend on a particular store, a parking facility, a restroom, or a meal late in the evening.'
        )
      }
    ],
    verify: l(
      'تحقق في يوم الزيارة من الخدمة التي لا يمكن الاستغناء عنها، لأن هذه الصفحة لا تمثل إدارة السوق أو أي بائع منفرد.',
      'Check any essential service on the day you visit, because this page does not represent the market operator or any individual vendor.'
    ),
    related: ['visit/friday-hours', 'visit/location-map', 'routes/90-minute-market-walk']
  },
  {
    slug: 'visit/friday-hours',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('سوق المباركية يوم الجمعة', 'Souk Al-Mubarakiya on Friday'),
    seoTitle: l('سوق المباركية يوم الجمعة | ساعات الزيارة والنصائح', 'Souk Al-Mubarakiya on Friday | Hours and practical tips'),
    description: l(
      'دليل عملي لزيارة سوق المباركية يوم الجمعة: ما الذي قد يتغير مقارنة ببقية الأسبوع، ومتى يكون الوصول أنسب للعائلات والزوار.',
      'A practical guide to visiting Souk Al-Mubarakiya on Friday: what may differ from the rest of the week, and which arrival windows work best for visitors and families.'
    ),
    hero: l(
      'الجمعة ليست مجرد يوم عادي في وسط مدينة الكويت؛ إيقاع الحركة، أوقات الراحة، وكثافة الزيارة قد تختلف بوضوح.',
      'Friday is not just another day in central Kuwait City; the movement of the area, its quieter breaks, and the visitor flow can differ noticeably.'
    ),
    intro: l(
      'الغرض من هذه الصفحة هو مساعدة الزائر على التوقع الواقعي، لا إعطاء وعد ثابت بأن كل جزء من السوق يعمل بالطريقة نفسها طوال اليوم.',
      'The aim of this page is to help you set realistic expectations, not to promise that every part of the souk behaves the same way throughout the day.'
    ),
    highlights: [
      { label: l('أفضل نافذة', 'Best window'), value: l('بعد العصر إلى المساء', 'Late afternoon into evening') },
      { label: l('مستوى الإقبال', 'Crowd pattern'), value: l('يزداد مع اقتراب الليل', 'Often rises toward night') },
      { label: l('تنبيه', 'Watch for'), value: l('الراحة وقت الصلاة والعطلات', 'Prayer-time pauses and holiday changes') }
    ],
    sections: [
      {
        title: l('ما الذي يختلف يوم الجمعة؟', 'What changes on Friday?'),
        body: l(
          'قد تتبدل أوقات العمل الفعلية لبعض الأنشطة، وتظهر فترات أهدأ خلال اليوم قبل عودة الزخم لاحقًا.',
          'Some businesses may shift their real operating pattern, and quieter intervals can appear before activity builds again later on.'
        )
      },
      {
        title: l('متى أصل؟', 'When should I arrive?'),
        body: l(
          'من يريد صورة حية للسوق يفضّل الوصول في النصف الثاني من اليوم. أما من يريد تجنب الذروة، فينبغي الوصول مبكرًا مع قبول أن بعض الخدمات قد لا تكون بكامل نشاطها بعد.',
          'If you want the souk at its livelier best, the second half of the day is usually the stronger choice. If you prefer to avoid the peak, arrive earlier and accept that some services may not yet be fully active.'
        ),
        bullets: [
          l('الزيارة العائلية غالبًا أسهل قبل الذروة المسائية', 'Family visits are often easier before the evening peak'),
          l('الطعام يتطلب مرونة في التوقيت', 'Meal plans need timing flexibility'),
          l('التصوير أسهل قبل امتلاء الممرات', 'Photography is easier before the lanes fill up')
        ]
      },
      {
        title: l('ما الذي أتحقق منه أولًا؟', 'What should I verify first?'),
        body: l(
          'تحقق من المطعم أو المقهى الذي تنوي زيارته، ومن حالة المواقف أو الطريق إذا كنت تعتمد على سيارة خاصة أو تنقل عائلي.',
          'Check the eatery you plan to use first, then confirm parking or your route if you depend on a private car or family transfer.'
        )
      }
    ],
    verify: l(
      'لا تعتمد على صفحة واحدة لتأكيد خدمة يوم الجمعة إذا كانت الزيارة مرتبطة بحجز أو مناسبة أو وصول طويل من خارج المنطقة.',
      'Do not rely on one page alone to confirm a Friday plan if your visit depends on a reservation, an occasion, or a long journey into the area.'
    ),
    related: ['visit/opening-hours', 'visit/parking', 'food/restaurants']
  },
  {
    slug: 'visit/location-map',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('موقع سوق المباركية والخريطة', 'Souk Al-Mubarakiya location and map'),
    seoTitle: l('موقع سوق المباركية والخريطة | الوصول والمدخل', 'Souk Al-Mubarakiya location and map | Access and arrival'),
    description: l(
      'أين يقع سوق المباركية بالضبط في مدينة الكويت؟ صفحة عملية عن الخريطة، نقطة الوصول، وما الذي يفيد قبل تشغيل الملاحة.',
      'Where exactly is Souk Al-Mubarakiya in Kuwait City? A practical page about the map, arrival point, and what helps before you launch navigation.'
    ),
    hero: l(
      'أغلب مشكلات الوصول تبدأ من اعتبار السوق مبنى واحدًا، بينما هو في الحقيقة منطقة متداخلة من ممرات ومداخل وحدود حضرية مفتوحة.',
      'Many arrival problems come from treating the souk as a single building, when in reality it is an open district of lanes, edges and multiple approach points.'
    ),
    intro: l(
      'استخدم الخريطة للوصول إلى الحافة الصحيحة، ثم أكمل المشي بحسب هدفك: طعام، تسوق، تاريخ، أو جولة قصيرة.',
      'Use the map to reach the right edge of the district, then finish on foot according to your purpose: food, shopping, history or a short walk.'
    ),
    highlights: [
      { label: l('المدينة', 'City'), value: l('مدينة الكويت', 'Kuwait City') },
      { label: l('نقطة الخريطة', 'Map point'), value: l('29.373827, 47.972932', '29.373827, 47.972932') },
      { label: l('أفضل استخدام', 'Best use'), value: l('تحديد حافة السوق لا قلبه فقط', 'Target the edge of the district, not just its middle') }
    ],
    sections: [
      {
        title: l('لماذا يحتاج السوق إلى قراءة خاصة للخريطة؟', 'Why does the souk need a slightly different map strategy?'),
        body: l(
          'لأن وجهتك العملية قد تكون المدخل الأقرب، أو منطقة المطاعم، أو الممرات التاريخية، لا مجرد دبوس واحد في المنتصف.',
          'Because your real destination may be the nearest entrance, the food side, or the historic lanes, not simply one pin in the center.'
        )
      },
      {
        title: l('كيف أستخدم تطبيق الملاحة؟', 'How should I use navigation apps?'),
        body: l(
          'ابحث باسم السوق الكامل، ثم راجع نقطة الإنزال أو الوقوف قبل الانطلاق. لا تفترض أن السيارة ستدخل الممرات الداخلية بسهولة.',
          'Search by the full market name, then review your drop-off or stopping point before you leave. Do not assume a car can reach the inner lanes smoothly.'
        ),
        bullets: [
          l('شارك الموقع مع من يرافقك قبل الوصول', 'Share the location with companions before arrival'),
          l('اتفق على نقطة لقاء واضحة عند الدخول', 'Set a clear meeting point before entering'),
          l('اختر المدخل الأقرب لهدفك داخل السوق', 'Pick the entrance closest to your goal inside the souk')
        ]
      },
      {
        title: l('ما الذي يفيد الزائر لأول مرة؟', 'What helps a first-time visitor most?'),
        body: l(
          'الوصول إلى الحافة الصحيحة يوفر وقتًا وجهدًا أكثر من محاولة الوقوف في أقرب نقطة ممكنة إلى الداخل.',
          'Reaching the right edge of the district saves more time and effort than trying to stop as close as possible to the middle.'
        )
      }
    ],
    verify: l(
      'تحقق من وضع الطريق والإنزال في وقت زيارتك، خاصة في المساء والعطلات أو إذا كنت ترافق أطفالًا أو كبار سن.',
      'Check traffic and drop-off conditions at your visit time, especially in the evening, on holidays, or when travelling with children or older visitors.'
    ),
    related: ['visit/parking', 'visit/bus-taxi', 'shopping/market-zones-map']
  },
  {
    slug: 'visit/parking',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('مواقف السيارات قرب سوق المباركية', 'Parking near Souk Al-Mubarakiya'),
    seoTitle: l('مواقف السيارات قرب سوق المباركية | دليل عملي', 'Parking near Souk Al-Mubarakiya | Practical guide'),
    description: l(
      'كيف تصل بالسيارة إلى سوق المباركية من دون ارتباك؟ صفحة تمهيدية عن أنواع المواقف، المشي من الموقف، ومتى تكون الخطة البديلة أفضل.',
      'How can you drive to Souk Al-Mubarakiya without unnecessary confusion? A starter guide to parking types, the walk from parking, and when a backup plan is wiser.'
    ),
    hero: l(
      'أصعب جزء من الزيارة بالسيارة ليس الوصول إلى الحي، بل اختيار الموقف المناسب ثم إنهاء المسافة القصيرة إلى السوق بهدوء.',
      'The hardest part of visiting by car is often not reaching the district, but choosing the right parking option and finishing the short last stretch smoothly.'
    ),
    intro: l(
      'هذه الصفحة لا توثق مرفقًا واحدًا بعينه، لكنها تساعدك على اختيار منطق الوقوف الأنسب بحسب وقت الزيارة وطبيعة مجموعتك.',
      'This page does not verify a single named facility, but it helps you choose the right parking logic for your visit time and the needs of your group.'
    ),
    highlights: [
      { label: l('الأفضل عمليًا', 'Most practical'), value: l('موقف قريب مع مشي قصير', 'A nearby facility with a short walk') },
      { label: l('الذروة', 'Peak challenge'), value: l('المساء والعطلات', 'Evenings and holidays') },
      { label: l('الخطة البديلة', 'Backup plan'), value: l('إنزال سريع ثم التقاء لاحق', 'Quick drop-off and regroup later') }
    ],
    sections: [
      {
        title: l('أي نوع من المواقف أبحث عنه؟', 'What type of parking should I look for?'),
        body: l(
          'ابحث عن موقف يسمح بدخول وخروج واضحين ومسار مشاة مريح، بدل التركيز فقط على أقرب مسافة على الخريطة.',
          'Look for a facility with a clear entry, exit and walkable pedestrian route, rather than focusing only on the shortest map distance.'
        )
      },
      {
        title: l('متى تصبح السيارة أقل كفاءة؟', 'When does the car become less efficient?'),
        body: l(
          'إذا وصلت في ذروة المساء أو يوم الجمعة أو مع مجموعة كبيرة، فقد يكون الإنزال عند الحافة ثم المشي أو استخدام سيارة أجرة قصيرة أسهل من البحث الطويل عن موقف.',
          'If you arrive during an evening peak, on Friday, or with a larger group, a drop-off at the edge followed by a short walk or taxi may be easier than a long parking search.'
        ),
        bullets: [
          l('اترك هامشًا زمنيًا للبحث عن الموقف', 'Leave time for the parking search'),
          l('لا تبنِ الخطة على توفر أول خيار فقط', 'Do not build the plan around one option only'),
          l('حدّد نقطة لقاء واضحة بعد الركن', 'Set a clear meeting point after parking')
        ]
      },
      {
        title: l('كيف أجعل المشي من الموقف أسهل؟', 'How do I make the walk from parking easier?'),
        body: l(
          'اختر موقفًا يناسب الأضعف حركة في المجموعة، ويفضل أن يمر عبر شوارع واضحة ومضيئة إذا كانت العودة ليلًا.',
          'Choose parking that suits the least mobile person in your group, ideally with a clear and well-lit walking route if you return at night.'
        )
      }
    ],
    verify: l(
      'راجع السعر وساعات التشغيل ووضع المدخل في يوم الزيارة، لأن هذه التفاصيل قد تتغير محليًا بسرعة.',
      'Review pricing, opening hours and access conditions on the day, because those details can shift quickly at local level.'
    ),
    related: ['visit/location-map', 'visit/bus-taxi', 'routes/90-minute-market-walk']
  },
  {
    slug: 'visit/bus-taxi',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('الوصول إلى سوق المباركية بالحافلة أو التاكسي', 'Reaching Souk Al-Mubarakiya by bus or taxi'),
    seoTitle: l('الوصول إلى سوق المباركية بالحافلة أو التاكسي', 'Reaching Souk Al-Mubarakiya by bus or taxi'),
    description: l(
      'مقارنة عملية بين الحافلة وسيارة الأجرة عند زيارة سوق المباركية، مع نصائح لاختيار نقطة النزول المناسبة.',
      'A practical comparison of bus and taxi options for visiting Souk Al-Mubarakiya, with tips on choosing the right drop-off point.'
    ),
    hero: l(
      'إذا كنت لا تقود بنفسك، فالسؤال الأهم ليس فقط كيف تصل، بل أين تنزل لتبدأ الجولة بأقل مجهود.',
      'If you are not driving yourself, the key question is not just how to get there, but where to get off so the walk begins with the least friction.'
    ),
    intro: l(
      'الوصول بالحافلة أو التاكسي مناسب لمعظم الزوار، لكنه يحتاج قرارًا بسيطًا قبل الانطلاق: هل الأولوية للتكلفة أم للسهولة أم لتقليل المشي؟',
      'Getting there by bus or taxi suits many visitors, but it helps to decide one thing first: is your priority lower cost, easier access, or less walking?'
    ),
    highlights: [
      { label: l('الأكثر مرونة', 'Most flexible'), value: l('سيارة الأجرة', 'Taxi') },
      { label: l('الأقل كلفة عادة', 'Usually lower cost'), value: l('الحافلة العامة', 'Public bus') },
      { label: l('أفضل ممارسة', 'Best practice'), value: l('الإنزال عند الحافة لا داخل الممرات', 'Drop off at the edge, not inside the lanes') }
    ],
    sections: [
      {
        title: l('متى أختار الحافلة؟', 'When should I choose the bus?'),
        body: l(
          'الحافلة خيار جيد إذا كنت مرنًا في الوقت وتستطيع إكمال مسافة مشي واضحة بعد النزول.',
          'The bus is a good choice if you have some timing flexibility and can complete a clear walking segment after you get off.'
        )
      },
      {
        title: l('ومتى يكون التاكسي أفضل؟', 'And when is a taxi the better choice?'),
        body: l(
          'سيارة الأجرة أنسب عند الزيارة العائلية أو في الحر أو إذا كان هدفك الوصول السريع إلى أقرب جهة مناسبة داخل محيط السوق.',
          'A taxi is often better for family visits, hot weather, or when you want the fastest route to the most convenient side of the souk.'
        ),
        bullets: [
          l('أخبر السائق بأن الإنزال عند مدخل السوق يكفي', 'Tell the driver that the entrance area is enough'),
          l('راجع نقطة الالتقاء قبل المغادرة', 'Review your pick-up point before leaving the car'),
          l('لا تتوقع وصول السيارة إلى كل ممر داخلي', 'Do not expect the car to reach every inner lane')
        ]
      },
      {
        title: l('ما الذي يفيد عند العودة؟', 'What helps on the way back?'),
        body: l(
          'اختر نقطة خروج سهلة التمييز، خصوصًا إذا كانت عودتك ليلًا أو بعد عشاء طويل داخل المنطقة.',
          'Choose an easy-to-recognise exit point, especially if you will return at night or after a long meal inside the district.'
        )
      }
    ],
    verify: l(
      'تحقق من الخط الفعلي أو نقطة الالتقاء قبل الانطلاق، لأن تغييرات الحركة أو الازدحام تؤثر مباشرة على الوقت الإجمالي.',
      'Confirm the live route or pick-up point before leaving, because traffic changes and crowd conditions directly affect the total travel time.'
    ),
    related: ['visit/location-map', 'visit/parking', 'visit/opening-hours']
  },
  {
    slug: 'heritage/history',
    category: l('التاريخ والثقافة', 'History and culture'),
    title: l('تاريخ سوق المباركية', 'History of Souk Al-Mubarakiya'),
    seoTitle: l('تاريخ سوق المباركية | الأسواق القديمة في الكويت', 'History of Souk Al-Mubarakiya | Old markets of Kuwait'),
    description: l(
      'صفحة تمهيدية عن تاريخ سوق المباركية وشبكة الأسواق القديمة في قلب مدينة الكويت، مع تفريق واضح بين تاريخ السوق وتاريخ المعالم المنفردة.',
      'An introductory page on the history of Souk Al-Mubarakiya and the old market network in the heart of Kuwait City, with a clear distinction between the souk and individual landmarks.'
    ),
    hero: l(
      'تاريخ المباركية ليس قصة مبنى واحد، بل قصة شبكة أسواق وذاكرة تجارية وحضرية تشكلت على مدى طويل.',
      'The history of Al-Mubarakiya is not the story of one building, but of a market network and an urban commercial memory formed over a long period.'
    ),
    intro: l(
      'القراءة الدقيقة للتاريخ تبدأ من رفض التواريخ المختصرة غير الموثقة، والعودة إلى المصادر الأكاديمية والرسمية التي تتحدث عن تطور المنطقة ككل.',
      'A careful reading of the history starts by resisting oversimplified dates and returning to academic and official sources that describe the development of the area as a whole.'
    ),
    highlights: [
      { label: l('طبيعة المكان', 'Nature of the place'), value: l('شبكة أسواق تاريخية', 'A historic network of markets') },
      { label: l('المصادر الأساسية', 'Core sources'), value: l('أكاديمية ورسمية', 'Academic and official') },
      { label: l('النقطة الأهم', 'Key point'), value: l('تاريخ المعالم لا يساوي تاريخ السوق كله', 'Landmark dates do not equal the whole souk’s date') }
    ],
    sections: [
      {
        title: l('كيف نفهم عمر السوق؟', 'How should the age of the souk be understood?'),
        body: l(
          'المصادر تتحدث عن جذور طويلة لشبكة الأسواق في قلب الكويت، مع أسواق متخصصة ارتبطت بسلع وحرف متنوعة.',
          'Sources describe long roots for the network of markets in the heart of Kuwait, including specialist souks linked to different crafts and goods.'
        )
      },
      {
        title: l('ما الفرق بين السوق والمعلم؟', 'What is the difference between the souk and a landmark?'),
        body: l(
          'بعض المباني أو الأكشاك أو الساحات قد تكون مؤرخة بدقة أكبر، لكن ذلك لا يعني أن تاريخها الفردي يمثل تاريخ السوق بأكمله.',
          'Some buildings, kiosks or squares may have clearer dates, but that does not mean their individual chronology defines the whole market district.'
        ),
        bullets: [
          l('السوق كيان حضري أوسع من مبنى منفرد', 'The souk is an urban district wider than one structure'),
          l('الأسماء التجارية تتبدل مع الزمن', 'Commercial names can shift over time'),
          l('التطور العمراني جزء من القصة التاريخية', 'Urban development is part of the historical story')
        ]
      },
      {
        title: l('لماذا يهم هذا الزائر اليوم؟', 'Why does this matter to visitors today?'),
        body: l(
          'لأن فهم السوق كتجربة ثقافية وتاريخية يغيّر طريقة التجول فيه: من استهلاك سريع إلى قراءة طبقات المكان.',
          'Because understanding the souk as a cultural and historical experience changes the walk itself, from quick consumption to reading the layers of place.'
        )
      }
    ],
    verify: l(
      'عند إضافة أي معلومة تاريخية دقيقة لاحقًا، يجب إسنادها إلى مصدر واضح وتاريخ مراجعة صريح.',
      'Any later addition of precise historical detail should be tied to a clear source and an explicit review date.'
    ),
    related: ['heritage/sheikh-mubarak-kiosk', 'shopping/market-zones-map', 'routes/90-minute-market-walk']
  },
  {
    slug: 'heritage/sheikh-mubarak-kiosk',
    category: l('التاريخ والثقافة', 'History and culture'),
    title: l('كشك الشيخ مبارك في المباركية', 'Sheikh Mubarak Kiosk in Al-Mubarakiya'),
    seoTitle: l('كشك الشيخ مبارك في المباركية | تاريخ ومعنى', 'Sheikh Mubarak Kiosk in Al-Mubarakiya | Meaning and history'),
    description: l(
      'تعريف تمهيدي بكشك الشيخ مبارك داخل نطاق المباركية: لماذا يلفت الانتباه، وكيف يُقرأ ضمن تاريخ المنطقة لا بمعزل عنها.',
      'An introductory guide to Sheikh Mubarak Kiosk within Al-Mubarakiya: why it stands out and how to read it within the wider history of the district.'
    ),
    hero: l(
      'الكشك من أبرز النقاط التي تجذب من يريد لمحة تاريخية سريعة داخل السوق، لكنه يُفهم أفضل ضمن محيطه العمراني كله.',
      'The kiosk is one of the most visible points for visitors seeking a quick historical stop inside the souk, but it makes more sense within its broader urban setting.'
    ),
    intro: l(
      'هذه الصفحة تمهيدية: تشرح المعنى والموضع النسبي والدور الرمزي، من دون ادعاء معلومات تشغيلية غير متحققة عن الدخول أو الإغلاق.',
      'This is an introductory page: it explains meaning, relative position and symbolic role, without claiming unverified operational details about access or closure.'
    ),
    highlights: [
      { label: l('النوع', 'Type'), value: l('معلم تاريخي داخل السوق', 'Historic landmark within the souk') },
      { label: l('أفضل استخدام', 'Best use'), value: l('محطة قصيرة ضمن جولة أوسع', 'A short stop within a wider walk') },
      { label: l('تحقق مسبق', 'Check ahead'), value: l('الوضع التشغيلي أو الإتاحة', 'Operational status or access') }
    ],
    sections: [
      {
        title: l('لماذا يهم الكشك؟', 'Why does the kiosk matter?'),
        body: l(
          'لأنه يربط الزائر بسرعة بتاريخ الإدارة والحياة العامة في المنطقة، ويمنح نقطة بصرية واضحة وسط النسيج التجاري.',
          'Because it gives visitors a quick connection to the history of public life and governance in the area, while also serving as a recognisable visual point inside a busy commercial fabric.'
        )
      },
      {
        title: l('كيف أدرجه في الجولة؟', 'How should I include it in a walk?'),
        body: l(
          'تعامل معه كمحطة تفسيرية قصيرة بين ممرات السوق، لا كوجهة منفصلة تستغرق الرحلة كلها.',
          'Treat it as a short interpretive stop between market lanes, not as a stand-alone destination for the entire trip.'
        ),
        bullets: [
          l('ادمجه مع جولة التاريخ أو التصوير', 'Pair it with a history or photography walk'),
          l('اجعله نقطة لقاء واضحة للمجموعة', 'Use it as a clear meeting marker for your group'),
          l('لا تفترض إمكان الدخول الداخلي دائمًا', 'Do not assume interior access is always available')
        ]
      },
      {
        title: l('ما الذي يحتاج تدقيقًا لاحقًا؟', 'What needs later verification?'),
        body: l(
          'أي معلومة عن ساعات الزيارة أو الإغلاق المؤقت أو الترميم تحتاج مراجعة مباشرة من مصدر موثوق أو رصد ميداني حديث.',
          'Any claim about visiting hours, temporary closure or restoration needs direct checking from a reliable source or current field observation.'
        )
      }
    ],
    verify: l(
      'استخدم هذه الصفحة لفهم المعلم ضمن سياقه، لا لاتخاذ قرار نهائي بشأن الدخول الداخلي أو التشغيل اليومي.',
      'Use this page to understand the landmark in context, not as a final decision tool for interior access or daily operation.'
    ),
    related: ['heritage/history', 'routes/90-minute-market-walk', 'visit/location-map']
  },
  {
    slug: 'shopping/gold-market',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('سوق الذهب في المباركية', 'Gold market in Al-Mubarakiya'),
    seoTitle: l('سوق الذهب في المباركية | ما الذي يعرفه الزائر قبل الشراء', 'Gold market in Al-Mubarakiya | What visitors should know before buying'),
    description: l(
      'مقدمة عملية إلى منطقة الذهب في المباركية: ما الذي يجذب الزائر، وكيف يختلف التصفح عن الشراء الفعلي، وما الذي يحتاج تحققًا إضافيًا.',
      'A practical introduction to the gold area in Al-Mubarakiya: what attracts visitors, how browsing differs from actual buying, and what needs extra checking.'
    ),
    hero: l(
      'منطقة الذهب من أكثر أجزاء السوق التي تجمع بين المشاهدة والشراء، ولذلك تحتاج قراءة هادئة أكثر من أي قرار سريع.',
      'The gold area is one of the parts of the souk where browsing and buying sit very close together, so it rewards a calmer read over any rushed decision.'
    ),
    intro: l(
      'هذه الصفحة لا تقدم ترشيحًا لمتجر بعينه، بل تساعدك على فهم منطق الزيارة: هل أنت هنا للمشاهدة، للمقارنة، أم للشراء الجاد؟',
      'This page does not recommend one shop over another. Instead, it helps you frame the visit: are you here to browse, compare, or buy seriously?'
    ),
    highlights: [
      { label: l('أفضل للزائر', 'Best for visitors'), value: l('المقارنة الهادئة', 'Calm comparison') },
      { label: l('قرار الشراء', 'Buying decision'), value: l('بعد سؤال واضح عن الوزن والسعر', 'After a clear check on weight and pricing') },
      { label: l('مهم', 'Important'), value: l('راجِع الفاتورة وسياسة المتجر', 'Review the invoice and the shop policy') }
    ],
    sections: [
      {
        title: l('ماذا يتوقع الزائر هنا؟', 'What should a visitor expect here?'),
        body: l(
          'واجهات معروضة بكثافة، اختلاف في الأسلوب والسعر، وحاجة إلى الصبر قبل المقارنة بين الخيارات.',
          'Dense display windows, variation in style and pricing, and a real need for patience before comparing options.'
        )
      },
      {
        title: l('كيف أتصفح من دون ارتباك؟', 'How do I browse without getting overwhelmed?'),
        body: l(
          'حدّد ما تبحث عنه أولًا، ثم اسأل بوضوح عن المواصفات الأساسية قبل الانتقال إلى السعر النهائي.',
          'Define what you want first, then ask clearly about the basic specifications before you move on to final price.'
        ),
        bullets: [
          l('ابدأ بالمقارنة بين أكثر من واجهة', 'Start by comparing more than one display'),
          l('اسأل عن الوزن والعيار قبل أي التزام', 'Ask about weight and purity before any commitment'),
          l('احتفظ بالإيصال والمعلومات الكتابية', 'Keep the receipt and written details')
        ]
      },
      {
        title: l('هل يناسب حتى من لا يشتري؟', 'Is it still worth it if you are not buying?'),
        body: l(
          'نعم، لأن منطقة الذهب تكشف جانبًا من ثقافة السوق والعرض التجاري حتى للزائر الذي يكتفي بالمشاهدة.',
          'Yes, because the gold area reveals part of the souk’s display culture and commercial atmosphere even for visitors who are only looking.'
        )
      }
    ],
    verify: l(
      'أي قرار شراء يجب أن يبنى على معلومات مباشرة من البائع وشروط البيع الحالية، لا على وصف عام في هذه الصفحة.',
      'Any purchase decision should rely on direct information from the seller and the current terms of sale, not on the general guidance here.'
    ),
    related: ['shopping/market-zones-map', 'visit/location-map', 'food/coffee-tea']
  },
  {
    slug: 'shopping/market-zones-map',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('خريطة مناطق السوق في المباركية', 'Map of market zones in Al-Mubarakiya'),
    seoTitle: l('خريطة مناطق السوق في المباركية | التسوق والمداخل', 'Map of market zones in Al-Mubarakiya | Shopping and entrances'),
    description: l(
      'كيف تقرأ تقسيمات السوق عند أول زيارة؟ هذه الصفحة تمهيد لخريطة المناطق التجارية والطعام والممرات التاريخية داخل المباركية.',
      'How should you read the souk’s different zones on a first visit? This page is a practical introduction to shopping, food and historic-lane areas within Al-Mubarakiya.'
    ),
    hero: l(
      'المباركية أسهل بكثير عندما تتعامل معها كمناطق مترابطة، لا كمتاهة واحدة كبيرة.',
      'Al-Mubarakiya becomes much easier when you think of it as linked zones instead of one large maze.'
    ),
    intro: l(
      'هذه الصفحة تعطيك تصورًا تنظيميًا يساعدك على اختيار المدخل والمسار، حتى قبل أن تنشر خريطة تفصيلية محدثة لكل جزء.',
      'This page gives you an organising view that helps you choose an entrance and route, even before a fully updated detailed map is published for every section.'
    ),
    highlights: [
      { label: l('الفائدة', 'Main use'), value: l('اختيار المسار الصحيح', 'Choosing the right route') },
      { label: l('تقسيم عملي', 'Practical split'), value: l('تسوق، طعام، معالم', 'Shopping, food, landmarks') },
      { label: l('أفضل للزيارة الأولى', 'Best for first visits'), value: l('نعم', 'Yes') }
    ],
    sections: [
      {
        title: l('لماذا يفيد تقسيم السوق إلى مناطق؟', 'Why is a zone-based view useful?'),
        body: l(
          'لأن هدفك قد يكون ضيقًا وواضحًا: قهوة سريعة، شراء معين، أو جولة تاريخية قصيرة. التقسيم يمنع المشي العشوائي الطويل.',
          'Because your goal may be narrow and specific: a quick coffee, one shopping errand, or a short heritage walk. A zone-based approach avoids long random wandering.'
        )
      },
      {
        title: l('ما المناطق التي يهتم بها أغلب الزوار؟', 'Which zones matter most to visitors?'),
        body: l(
          'غالبًا ما يبحث الزائر عن محور الطعام، ومحور الشراء المتخصص، ومحور المعالم السريعة المرتبطة بتاريخ المكان.',
          'Most visitors tend to care about a food zone, a specialist shopping zone, and a compact set of landmarks linked to the place’s history.'
        ),
        bullets: [
          l('ابدأ بهدف واحد ثم أضف ما حوله', 'Start with one goal, then add what is nearby'),
          l('اختر المدخل بناءً على أول محطة لا على اسم السوق فقط', 'Choose the entrance based on the first stop, not just the market name'),
          l('احسب وقت العودة قبل التعمق في الممرات', 'Think about the return route before going too deep into the lanes')
        ]
      },
      {
        title: l('كيف نطوّر هذه الصفحة لاحقًا؟', 'How should this page evolve later?'),
        body: l(
          'الخطوة التالية هي نشر خريطة أكثر تفصيلًا مبنية على تحقق ميداني حديث، مع ربط كل منطقة بصفحتها المتخصصة.',
          'The next step is to publish a more detailed map built on current field verification, with each zone linked to its specialist page.'
        )
      }
    ],
    verify: l(
      'تقسيم المناطق هنا إرشادي ومفيد للتنقل، لكنه ليس بديلًا عن خريطة تشغيلية محدثة في يوم الزيارة.',
      'The zone breakdown here is useful for orientation, but it is not a substitute for an up-to-date operational map on the day of your visit.'
    ),
    related: ['visit/location-map', 'shopping/gold-market', 'routes/90-minute-market-walk']
  },
  {
    slug: 'food/restaurants',
    category: l('الطعام والمقاهي', 'Food and cafes'),
    title: l('المطاعم في سوق المباركية', 'Restaurants in Souk Al-Mubarakiya'),
    seoTitle: l('المطاعم في سوق المباركية | كيف تختار مكان الأكل', 'Restaurants in Souk Al-Mubarakiya | How to choose where to eat'),
    description: l(
      'صفحة تمهيدية لاختيار المطاعم في سوق المباركية من دون قوائم تجارية منحازة: متى تأكل، وأين تركز، وما الذي تتحقق منه قبل الجلوس.',
      'An introductory guide to choosing restaurants in Souk Al-Mubarakiya without turning the site into a commercial list: when to eat, where to focus, and what to check before sitting down.'
    ),
    hero: l(
      'الأكل جزء أساسي من تجربة المباركية، لكن أفضل قرار ليس دائمًا المطعم الأشهر بل المكان الأنسب لوقتك ومجموعتك وهدف الزيارة.',
      'Food is a central part of the Al-Mubarakiya experience, but the best choice is not always the most talked-about place; it is the one that best fits your timing, group and purpose.'
    ),
    intro: l(
      'هذه الصفحة تقسم المشهد الغذائي بحسب الحاجة العملية: وجبة سريعة، جلسة أطول، أو استراحة بين جولة وأخرى.',
      'This page breaks the food scene down by practical need: a quick meal, a longer sit-down stop, or a pause between different parts of your walk.'
    ),
    highlights: [
      { label: l('أنسب وقت', 'Best timing'), value: l('بعد الجولة الأولى أو قبل الذروة', 'After the first walk or before the peak') },
      { label: l('أفضل نهج', 'Best approach'), value: l('اختر حسب نوع الزيارة لا حسب الضجة فقط', 'Choose based on visit style, not noise alone') },
      { label: l('تحقق', 'Check'), value: l('الانتظار وطريقة الجلوس والدفع', 'Waiting time, seating style and payment') }
    ],
    sections: [
      {
        title: l('كيف أختار مطعمًا مناسبًا؟', 'How do I choose a suitable place to eat?'),
        body: l(
          'ابدأ من شكل الزيارة: عائلية، قصيرة، ليلية، أو مرتبطة بالتسوق. بعدها يصبح اختيار نوع المطعم أسهل بكثير.',
          'Start with the shape of the visit itself: family, short stop, evening outing, or a shopping-focused walk. Once that is clear, the type of restaurant becomes easier to choose.'
        )
      },
      {
        title: l('متى يكون الطعام جزءًا من الخطة لا مجرد توقف؟', 'When should food be part of the plan rather than just a stop?'),
        body: l(
          'إذا كانت الزيارة في المساء أو مع ضيوف أو مع أطفال، فاختيار وقت الأكل مبكرًا يخفف كثيرًا من الازدحام والانتظار.',
          'If the visit is in the evening, with guests, or with children, deciding the meal window early can reduce waiting and crowd pressure considerably.'
        ),
        bullets: [
          l('الزيارة القصيرة تحتاج مكانًا سريع الإيقاع', 'Short visits need quicker service'),
          l('الزيارة العائلية تحتاج جلوسًا أوضح ومسافة مشي أقل', 'Family visits benefit from clearer seating and less walking'),
          l('الزيارة الليلية تحتاج توقعًا أفضل للزحام', 'Night visits need better crowd expectations')
        ]
      },
      {
        title: l('ما الذي أراجعه قبل الجلوس؟', 'What should I check before sitting down?'),
        body: l(
          'اسأل عن مدة الانتظار، وطبيعة الجلسة، ووسائل الدفع، وما إذا كان المكان يناسب الأطفال أو كبار السن أو من يحتاج حركة أسهل.',
          'Ask about waiting time, seating style, payment options, and whether the place suits children, older visitors or anyone needing easier movement.'
        )
      }
    ],
    verify: l(
      'هذه الصفحة لا توصي باسم تجاري محدد، ولذلك يبقى قرار الاختيار النهائي مرتبطًا بالمشهد الفعلي وقت الوصول.',
      'This page does not endorse any single business by name, so your final choice should still respond to the real scene when you arrive.'
    ),
    related: ['food/coffee-tea', 'visit/opening-hours', 'visit/friday-hours']
  },
  {
    slug: 'food/coffee-tea',
    category: l('الطعام والمقاهي', 'Food and cafes'),
    title: l('القهوة والشاي في المباركية', 'Coffee and tea in Al-Mubarakiya'),
    seoTitle: l('القهوة والشاي في المباركية | جلسة قصيرة داخل السوق', 'Coffee and tea in Al-Mubarakiya | A short stop inside the souk'),
    description: l(
      'متى تكون القهوة أو الشاي أفضل من الوجبة الكاملة داخل المباركية؟ صفحة تمهيدية عن الاستراحة القصيرة وأجواء الجلوس في السوق.',
      'When is coffee or tea better than a full meal inside Al-Mubarakiya? An introductory page on short breaks and the atmosphere of sitting in the souk.'
    ),
    hero: l(
      'أحيانًا أفضل طريقة لقراءة السوق ليست وجبة كاملة، بل استراحة قصيرة تمنحك وقتًا للمشاهدة والتنفس ثم متابعة الجولة.',
      'Sometimes the best way to read the souk is not through a full meal, but through a short stop that lets you watch, pause and continue your walk.'
    ),
    intro: l(
      'هذه الصفحة تفيد من يريد استراحة خفيفة أو لقاءً قصيرًا أو وقتًا للتصوير والهدوء بين مناطق السوق المختلفة.',
      'This page is for visitors who want a light break, a short meeting point, or a calm moment for photography between different parts of the souk.'
    ),
    highlights: [
      { label: l('أفضل استخدام', 'Best use'), value: l('استراحة بين محطتين', 'A break between two stops') },
      { label: l('مناسب لـ', 'Good for'), value: l('الزيارة القصيرة أو المسائية', 'Short or evening visits') },
      { label: l('تحقق', 'Check'), value: l('نوع الجلسة ووقت الذروة', 'Seating style and peak time') }
    ],
    sections: [
      {
        title: l('لماذا تفيد جلسة القهوة أو الشاي هنا؟', 'Why does a coffee or tea stop work well here?'),
        body: l(
          'لأنها تمنحك نقطة تهدئة داخل منطقة مليئة بالحركة، وتسمح بإعادة ترتيب الجولة بدل التحول إلى زيارة مرهقة.',
          'Because it creates a pause inside an active district and lets you reset the walk before it becomes tiring.'
        )
      },
      {
        title: l('متى أختار الاستراحة بدل الوجبة؟', 'When should I choose a short drink stop over a full meal?'),
        body: l(
          'عندما يكون وقتك محدودًا، أو عندما تريد الاستمرار في المشي لاحقًا، أو إذا كانت المجموعة منقسمة بين التسوق والجلسة.',
          'When time is limited, when you plan to keep walking afterwards, or when your group is split between shopping and sitting down.'
        ),
        bullets: [
          l('نافذة ممتازة قبل الغروب أو بعده بقليل', 'A strong window is just before or after sunset'),
          l('أنسب من الوجبة الثقيلة في الجولة السريعة', 'Often better than a heavy meal on a short visit'),
          l('يسهل جعله نقطة التقاء للمجموعة', 'It can work as an easy meeting point')
        ]
      },
      {
        title: l('ما الذي أتحقق منه؟', 'What should I check?'),
        body: l(
          'راجع الزحام، ونوع الجلسة، وهل المكان مناسب للانتظار القصير أم يتجه أكثر إلى جلسة أطول.',
          'Check the crowd level, the seating style, and whether the place suits a quick pause or leans toward a longer sitting experience.'
        )
      }
    ],
    verify: l(
      'أفضل جلسة قهوة أو شاي تتغير بحسب الوقت والزحام والطقس، لذا لا توجد نقطة واحدة تصلح للجميع دائمًا.',
      'The best coffee or tea stop changes with timing, crowd level and weather, so there is no single option that suits everyone every time.'
    ),
    related: ['food/restaurants', 'shopping/gold-market', 'routes/90-minute-market-walk']
  },
  {
    slug: 'routes/90-minute-market-walk',
    category: l('المسارات والخطط', 'Routes and itineraries'),
    title: l('جولة 90 دقيقة في سوق المباركية', 'A 90-minute walk through Souk Al-Mubarakiya'),
    seoTitle: l('جولة 90 دقيقة في سوق المباركية | مسار مختصر', 'A 90-minute walk through Souk Al-Mubarakiya | Compact route'),
    description: l(
      'إذا كان لديك وقت قصير فقط في المباركية، فهذه الصفحة ترسم لك جولة متوازنة بين الممرات والتوقفات السريعة والطعام الخفيف.',
      'If you only have limited time in Al-Mubarakiya, this page sketches a balanced 90-minute route across lanes, short stops and a light refreshment break.'
    ),
    hero: l(
      'ليس كل زائر يحتاج نصف يوم كامل. أحيانًا تكفي 90 دقيقة إذا كان المسار واضحًا والهدف محددًا منذ البداية.',
      'Not every visitor needs half a day. Sometimes 90 minutes is enough, provided the route is clear and the goal is set from the start.'
    ),
    intro: l(
      'هذا المسار مناسب للزائر لأول مرة، أو لمن يمر في وسط المدينة ويريد فهمًا سريعًا للمكان من دون إنهاك.',
      'This route is well suited to first-time visitors or anyone passing through central Kuwait City who wants a quick but meaningful sense of place.'
    ),
    highlights: [
      { label: l('المدة', 'Duration'), value: l('حوالي 90 دقيقة', 'About 90 minutes') },
      { label: l('الأنسب لـ', 'Best for'), value: l('الزيارة الأولى أو السريعة', 'First or short visits') },
      { label: l('الإيقاع', 'Pace'), value: l('مشي معتدل مع محطة قصيرة', 'Moderate walking with one short stop') }
    ],
    sections: [
      {
        title: l('كيف نبني هذه الجولة؟', 'How is this route built?'),
        body: l(
          'تبدأ من وصول عملي، ثم تمر بممرات تعطي صورة واضحة عن السوق، مع نقطة تاريخية أو بصرية، وتنتهي باستراحة خفيفة قبل الخروج.',
          'It starts from a practical arrival point, moves through lanes that quickly represent the market, includes one historical or visual stop, and ends with a light break before exit.'
        )
      },
      {
        title: l('ماذا أرى خلال 90 دقيقة؟', 'What can you realistically see in 90 minutes?'),
        body: l(
          'يكفي هذا الوقت لمشاهدة الممرات الأساسية، وتذوق أجواء السوق، والتوقف لشراب أو لقطة تاريخية أو استراحة قصيرة.',
          'That amount of time is enough for the main lanes, the atmosphere of the souk, and a short stop for a drink, a historic point, or a light rest.'
        ),
        bullets: [
          l('ابدأ من الجهة الأقرب لهدفك', 'Start from the side closest to your goal'),
          l('لا تحاول تغطية كل شيء في زيارة واحدة', 'Do not try to cover everything in one short trip'),
          l('اترك وقتًا واضحًا للعودة أو الانتقال التالي', 'Leave clear time for the return or your next stop')
        ]
      },
      {
        title: l('متى لا تكفي هذه الجولة؟', 'When is this route not enough?'),
        body: l(
          'إذا كنت تريد طعامًا كاملاً، أو شراءً متأنيًا، أو جولة تاريخية أعمق، فالأفضل تمديد الخطة إلى نصف يوم.',
          'If you want a full meal, careful shopping, or deeper heritage time, extending the plan to a half-day route is the better call.'
        )
      }
    ],
    verify: l(
      'اضبط نقطة البداية والنهاية بحسب وسيلة نقلك ووقت اليوم، لأن أفضل مسار قصير يتغير مع الزحام والحرارة وهدف الزيارة.',
      'Adjust the start and end points to your transport mode and time of day, because the best short route shifts with crowd level, heat and visit purpose.'
    ),
    related: ['visit/location-map', 'heritage/sheikh-mubarak-kiosk', 'food/coffee-tea']
  },
  {
    slug: 'visit/from-airport',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('من مطار الكويت إلى سوق المباركية', 'From Kuwait Airport to Souk Al-Mubarakiya'),
    seoTitle: l('من مطار الكويت إلى سوق المباركية | الوصول العملي', 'From Kuwait Airport to Souk Al-Mubarakiya | Practical arrival'),
    description: l(
      'صفحة تمهيدية لمقارنة الوصول من مطار الكويت الدولي إلى سوق المباركية بسيارة أجرة أو نقل خاص أو انتقال مرحلي عبر وسط المدينة.',
      'An introductory page comparing the practical ways to reach Souk Al-Mubarakiya from Kuwait International Airport by taxi, private transfer or a staged trip through central Kuwait City.'
    ),
    hero: l(
      'المطار بعيد بما يكفي ليجعل التخطيط مفيدًا، لكنه قريب بما يكفي ليكون السوق جزءًا منطقيًا من اليوم الأول أو الأخير في الكويت.',
      'The airport is far enough to reward planning, yet close enough for the souk to fit naturally into a first or last day in Kuwait.'
    ),
    intro: l(
      'الهدف هنا هو تقليل الاحتكاك عند الوصول: اختيار وسيلة النقل، وفهم متى يكون الذهاب مباشرة منطقيًا ومتى يكون التوقف أولًا في الفندق أفضل.',
      'The purpose here is to reduce arrival friction: choose the right transport mode, and decide whether going directly makes sense or whether a hotel stop first is the better move.'
    ),
    highlights: [
      { label: l('الأكثر مباشرة', 'Most direct'), value: l('سيارة أجرة أو نقل خاص', 'Taxi or private transfer') },
      { label: l('الأفضل للحقائب', 'Best with luggage'), value: l('توقف أول في الفندق', 'Hotel stop first') },
      { label: l('مهم', 'Important'), value: l('اتفاق واضح على نقطة الإنزال', 'Agree on a clear drop-off point') }
    ],
    sections: [
      {
        title: l('هل أذهب مباشرة من المطار؟', 'Should I go directly from the airport?'),
        body: l(
          'الأمر يعتمد على وقت الوصول، والحقائب، والحرارة، وما إذا كانت المباركية محطة قصيرة أم جزءًا من جولة أطول في اليوم نفسه.',
          'That depends on arrival time, luggage, heat, and whether Al-Mubarakiya is a short stop or part of a longer day plan.'
        )
      },
      {
        title: l('ما الوسيلة الأسهل؟', 'Which transport mode is easiest?'),
        body: l(
          'غالبًا تكون سيارة الأجرة أو النقل الخاص هي الأكثر مباشرة وأقل تعقيدًا، خصوصًا لزائر يصل لأول مرة أو يسافر مع عائلة.',
          'Taxi or private transfer is usually the most direct and least complicated option, especially for first-time visitors or families.'
        ),
        bullets: [
          l('خفف الأمتعة قبل الذهاب إذا أمكن', 'Reduce luggage before heading there if possible'),
          l('اختر مدخلًا واضحًا لا نقطة وسطية غامضة', 'Choose a clear edge point, not a vague central pin'),
          l('اجعل العودة جزءًا من الخطة منذ البداية', 'Build the return into the plan from the start')
        ]
      },
      {
        title: l('متى يكون الفندق أولًا أفضل؟', 'When is the hotel-first option better?'),
        body: l(
          'إذا كان الوصول متأخرًا، أو إذا كانت الحقائب كثيرة، أو إذا كنت تريد زيارة أكثر راحة بدل المرور السريع.',
          'When arrival is late, luggage is substantial, or you want a calmer visit instead of a rushed pass-through.'
        )
      }
    ],
    verify: l(
      'راجع زمن الرحلة الفعلي وحالة الطريق ووقت نشاط السوق في يوم الوصول، لأن التجربة تتغير كثيرًا بين الظهيرة والمساء.',
      'Check live travel time, traffic conditions and market activity on the day of arrival, because the experience can differ a lot between midday and evening.'
    ),
    related: ['visit/bus-taxi', 'visit/location-map', 'visit/opening-hours']
  },
  {
    slug: 'visit/best-time',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('أفضل وقت لزيارة سوق المباركية', 'Best time to visit Souk Al-Mubarakiya'),
    seoTitle: l('أفضل وقت لزيارة سوق المباركية | صباحًا أم مساءً؟', 'Best time to visit Souk Al-Mubarakiya | Morning or evening?'),
    description: l(
      'متى تكون المباركية في أفضل حالاتها؟ صفحة عملية تقارن بين الصباح والمساء والفصول المختلفة بحسب الازدحام والطقس وطبيعة الجولة.',
      'When is Al-Mubarakiya at its best? A practical page comparing mornings, evenings and seasons by crowd level, weather and visit style.'
    ),
    hero: l(
      'أفضل وقت لا يعني الشيء نفسه لكل زائر؛ فالباحث عن الهدوء لا يريد ما يريده الباحث عن الأجواء والحركة والطعام.',
      'The best time does not mean the same thing to every visitor; the person looking for calm wants something different from the visitor chasing atmosphere, movement and food.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على مطابقة وقت الزيارة مع هدفها، بدل البحث عن إجابة عامة واحدة تصلح للجميع.',
      'This page helps you match timing to the purpose of the trip, rather than searching for one blanket answer for everyone.'
    ),
    highlights: [
      { label: l('للأهدأ', 'For a calmer visit'), value: l('الصباح', 'Morning') },
      { label: l('للأجواء', 'For atmosphere'), value: l('المساء', 'Evening') },
      { label: l('للمشي المريح', 'For easier walking'), value: l('الأشهر المعتدلة', 'The milder months') }
    ],
    sections: [
      {
        title: l('الصباح أم المساء؟', 'Morning or evening?'),
        body: l(
          'الصباح عادة أسهل للحركة والتصوير والزيارة السريعة، بينما يمنح المساء صورة السوق الأكثر حياة وامتلاء.',
          'Morning is usually easier for movement, photography and quick visits, while evening offers the market at its most animated and full.'
        )
      },
      {
        title: l('كيف يؤثر الطقس؟', 'How does weather affect the plan?'),
        body: l(
          'في الحرارة العالية تصبح الزيارة المسائية أكثر راحة عادة، أما في الأشهر الألطف فيستعيد النهار جاذبيته للمشي الطويل.',
          'In hotter periods, evening usually becomes the more comfortable option, while in milder months the daytime walk regains its appeal.'
        ),
        bullets: [
          l('اربط الوقت بهدف الزيارة لا بالعادة فقط', 'Match timing to the purpose, not habit alone'),
          l('خفف التوقعات في أيام الذروة والعطلات', 'Moderate expectations on peak days and holidays'),
          l('خطط للاستراحة إذا كانت الجولة طويلة', 'Plan for a pause if the route is long')
        ]
      },
      {
        title: l('متى يكون السوق مناسبًا للعائلات؟', 'When does the souk work best for families?'),
        body: l(
          'غالبًا قبل الذروة المسائية بقليل، حين تبقى الحركة حية لكن الممرات لم تبلغ أقصى ازدحامها بعد.',
          'Often just before the evening peak, when the area still feels alive but the lanes have not yet reached their busiest point.'
        )
      }
    ],
    verify: l(
      'تحقق من حالة الطقس الفعلية والوقت الذي تريد فيه الأكل أو التسوق، لأن أفضل وقت عملي يتغير مع البرنامج لا مع السوق فقط.',
      'Check the live weather and the timing of the meal or shopping you want, because the best practical window changes with your plan, not just with the market.'
    ),
    related: ['visit/opening-hours', 'visit/with-kids', 'routes/evening-food-walk']
  },
  {
    slug: 'visit/how-long',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('كم تستغرق زيارة سوق المباركية؟', 'How long does a visit to Souk Al-Mubarakiya take?'),
    seoTitle: l('كم تستغرق زيارة سوق المباركية؟ | مدة الجولة', 'How long does a visit to Souk Al-Mubarakiya take? | Visit length'),
    description: l(
      'هل تكفي ساعة؟ أم تحتاج إلى نصف يوم؟ دليل عملي لتقدير مدة الزيارة بحسب نوع الجولة: سريعة، متوازنة، أو أعمق.',
      'Is one hour enough, or do you need half a day? A practical guide to estimating visit length by route style: quick, balanced or deeper.'
    ),
    hero: l(
      'مدة الزيارة الصحيحة هي التي تمنحك تجربة مريحة، لا التي تحاول فيها أن ترى كل شيء دفعة واحدة.',
      'The right visit length is the one that keeps the experience comfortable, not the one that tries to cram everything into a single pass.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على اختيار إطار زمني واقعي قبل الوصول، حتى لا تتحول الزيارة إلى عجلة أو إنهاك.',
      'This page helps you set a realistic time frame before arrival so the visit does not turn into a rush or a drain.'
    ),
    highlights: [
      { label: l('الحد الأدنى', 'Minimum'), value: l('60–90 دقيقة', '60–90 minutes') },
      { label: l('الأكثر توازنًا', 'Most balanced'), value: l('ساعتان إلى ثلاث', 'Two to three hours') },
      { label: l('للزيارة الأعمق', 'For a deeper visit'), value: l('نصف يوم', 'Half a day') }
    ],
    sections: [
      {
        title: l('ماذا تكفي 60–90 دقيقة؟', 'What is 60–90 minutes enough for?'),
        body: l(
          'تكفي لجولة أولى في الممرات الأساسية مع توقف قصير ولقطة عامة لطبيعة المكان.',
          'It is enough for a first pass through the main lanes, one short stop, and a general sense of the place.'
        )
      },
      {
        title: l('متى أحتاج ساعتين أو أكثر؟', 'When do I need two hours or more?'),
        body: l(
          'عندما تجمع بين المشي والطعام والتسوق أو عندما تريد مساحة للتوقف والجلوس من دون ضغط زمني.',
          'When you combine walking, food and shopping, or when you want room to pause and sit without time pressure.'
        ),
        bullets: [
          l('أضف وقتًا إذا كانت الزيارة عائلية', 'Add time for family visits'),
          l('أضف وقتًا إذا كان هناك شراء فعلي', 'Add time if actual buying is involved'),
          l('خفف المحطات إذا كان اليوم مزدحمًا أصلًا', 'Trim stops if the wider day is already busy')
        ]
      },
      {
        title: l('ومتى يصبح نصف اليوم منطقيًا؟', 'And when does half a day make sense?'),
        body: l(
          'إذا كنت تريد دمج السوق مع معالم قريبة أو مع وجبة كاملة أو مع مسار ثقافي أهدأ.',
          'If you want to combine the souk with nearby landmarks, a full meal, or a calmer cultural route.'
        )
      }
    ],
    verify: l(
      'اضبط المدة حسب وسيلة الوصول والحرارة ووجود أطفال أو كبار سن، لأن مدة السوق ليست منفصلة عن تعب اليوم كله.',
      'Adjust the time frame to your transport mode, the heat, and whether children or older visitors are with you, because the souk does not sit outside the fatigue of the wider day.'
    ),
    related: ['routes/90-minute-market-walk', 'routes/half-day-heritage', 'visit/best-time']
  },
  {
    slug: 'visit/accessibility',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('سهولة الوصول في سوق المباركية', 'Accessibility at Souk Al-Mubarakiya'),
    seoTitle: l('سهولة الوصول في سوق المباركية | الحركة والممرات', 'Accessibility at Souk Al-Mubarakiya | Movement and routes'),
    description: l(
      'صفحة تمهيدية لمستخدمي الكراسي المتحركة وكبار السن ومن يحتاج حركة أسهل داخل المباركية، مع نصائح لاختيار المدخل والمسار.',
      'An introductory page for wheelchair users, older visitors and anyone needing easier movement inside Al-Mubarakiya, with practical advice on entrances and routes.'
    ),
    hero: l(
      'زيارة السوق ممكنة لكثير من الزوار، لكن الراحة تعتمد على اختيار المسار والوقت المناسبين أكثر من اعتمادها على اسم المكان وحده.',
      'The souk can work for many visitors, but comfort depends more on choosing the right route and timing than on the place name alone.'
    ),
    intro: l(
      'الغرض هنا هو تقليل المفاجآت: مداخل أوسع، ممرات أوضح، وتوقع واقعي لما قد يسببه الزحام أو تفاوت الأرضيات.',
      'The aim here is to reduce surprises: wider entrances, clearer lanes, and a realistic expectation of what crowding or uneven surfaces may mean.'
    ),
    highlights: [
      { label: l('الأفضل', 'Best option'), value: l('المداخل الأوسع والأوقات الأهدأ', 'Wider entrances and calmer periods') },
      { label: l('التحدي', 'Main challenge'), value: l('الزحام وتفاوت الحركة', 'Crowds and uneven movement flow') },
      { label: l('مفيد', 'Helpful'), value: l('جولة أقصر ومحطات راحة أوضح', 'A shorter route with clearer breaks') }
    ],
    sections: [
      {
        title: l('ما الذي يجعل الزيارة أسهل؟', 'What makes the visit easier?'),
        body: l(
          'اختيار وقت أقل ازدحامًا ومدخل أكثر اتساعًا يغيّران التجربة أكثر من أي نصيحة عامة أخرى.',
          'Choosing a less crowded time and a wider entrance changes the experience more than any other general tip.'
        )
      },
      {
        title: l('ما الصعوبات المتوقعة؟', 'What difficulties should be expected?'),
        body: l(
          'المشكلة غالبًا ليست في نقطة واحدة، بل في تغير كثافة الحركة بين الممرات واحتمال وجود انتقالات أقل سلاسة في بعض الأجزاء.',
          'The issue is usually not one single obstacle, but shifts in crowd density between lanes and the possibility of less-smooth transitions in some parts.'
        ),
        bullets: [
          l('ابدأ بمسار قصير وقابل للعودة السريعة', 'Start with a short route that is easy to reverse'),
          l('اجعل نقطة الراحة جزءًا من الخطة', 'Make the rest stop part of the plan'),
          l('تجنب ساعات الذروة إذا كانت الحركة السهلة أولوية', 'Avoid peak periods if easy movement matters most')
        ]
      },
      {
        title: l('ماذا يحتاج تحققًا ميدانيًا؟', 'What still needs on-site checking?'),
        body: l(
          'حالة المداخل ودورات المياه ومسارات العبور المريحة تحتاج تحققًا مباشرًا في يوم الزيارة.',
          'The condition of entrances, restrooms and the most comfortable paths still needs direct checking on the day.'
        )
      }
    ],
    verify: l(
      'إذا كانت سهولة الحركة شرطًا أساسيًا لا يمكن التنازل عنه، فالأفضل استخدام خطة وصول قصيرة ومرنة مع نقطة خروج واضحة.',
      'If accessibility is a non-negotiable requirement, use a short flexible route with a clear exit plan.'
    ),
    related: ['visit/with-kids', 'visit/location-map', 'visit/parking']
  },
  {
    slug: 'visit/with-kids',
    category: l('خطط الزيارة', 'Plan your visit'),
    title: l('زيارة سوق المباركية مع الأطفال', 'Visiting Souk Al-Mubarakiya with kids'),
    seoTitle: l('زيارة سوق المباركية مع الأطفال | نصائح عائلية', 'Visiting Souk Al-Mubarakiya with kids | Family tips'),
    description: l(
      'كيف تخطط لجولة عائلية مريحة في المباركية؟ صفحة عملية عن التوقيت والمسافة والاستراحات والطعام الخفيف للأطفال.',
      'How should you plan a comfortable family outing in Al-Mubarakiya? A practical page on timing, walking distance, breaks and light food stops for children.'
    ),
    hero: l(
      'الزيارة العائلية الناجحة لا تعتمد على كثرة المحطات، بل على إيقاع مناسب يوازن بين المشي والاستراحة والانتباه للحرارة والزحام.',
      'A successful family visit depends less on the number of stops and more on a good rhythm that balances walking, breaks, heat and crowd awareness.'
    ),
    intro: l(
      'هذه الصفحة موجهة للعائلات التي تريد تجربة السوق من دون تحويلها إلى جهد طويل على الأطفال أو المرافقين.',
      'This page is for families who want to enjoy the souk without turning the outing into a long strain on children or accompanying adults.'
    ),
    highlights: [
      { label: l('الأفضل', 'Best window'), value: l('قبل الذروة أو في مساء معتدل', 'Before the peak or in a mild evening') },
      { label: l('الإيقاع', 'Pace'), value: l('محطات قصيرة وواضحة', 'Short clear stops') },
      { label: l('مهم', 'Important'), value: l('ماء واستراحة ومخرج سهل', 'Water, a break, and an easy exit') }
    ],
    sections: [
      {
        title: l('كيف أجعل الجولة أسهل للأطفال؟', 'How do I make the walk easier for children?'),
        body: l(
          'خفف عدد المحطات، وابدأ بهدف واحد واضح، واترك مساحة للتوقف عندما يظهر التعب بدل الاستمرار بخطة جامدة.',
          'Keep the number of stops light, start with one clear goal, and leave room to pause when tiredness shows instead of forcing a rigid plan.'
        )
      },
      {
        title: l('متى يكون الوقت مناسبًا للعائلة؟', 'When does the timing work best for families?'),
        body: l(
          'الأوقات التي تجمع بين نشاط معقول وحرارة أقل وزحام غير خانق تكون غالبًا الأنسب.',
          'Times that combine reasonable activity with lower heat and not-too-intense crowding are usually the best fit.'
        ),
        bullets: [
          l('المشي القصير أفضل من الجولة الطويلة للأطفال الصغار', 'Short walks work better than long loops for younger children'),
          l('اختر نقطة طعام أو شراب مبكرًا', 'Choose a food or drink stop early'),
          l('خطط للعودة قبل الإرهاق لا بعده', 'Plan to leave before exhaustion, not after it')
        ]
      },
      {
        title: l('ما الذي يجب الانتباه له؟', 'What deserves extra attention?'),
        body: l(
          'الحرارة، والزحام، ونقطة اللقاء إذا تفرقت المجموعة، إضافة إلى اختيار دخول وخروج واضحين.',
          'Heat, crowding, a meeting plan if the group spreads out, and clear entry and exit points.'
        )
      }
    ],
    verify: l(
      'إذا كان الأطفال صغارًا جدًا أو اليوم حارًا، فاختصر الجولة بدل محاولة تطبيق برنامج كامل كما هو.',
      'If the children are very young or the day is hot, shorten the route instead of trying to force the full plan.'
    ),
    related: ['visit/best-time', 'visit/accessibility', 'routes/family-friendly']
  },
  {
    slug: 'heritage/traditional-souqs',
    category: l('التاريخ والثقافة', 'History and culture'),
    title: l('الأسواق التقليدية في المباركية', 'Traditional souqs within Al-Mubarakiya'),
    seoTitle: l('الأسواق التقليدية في المباركية | كيف تشكلت التخصصات', 'Traditional souqs within Al-Mubarakiya | How the specialist markets formed'),
    description: l(
      'مقدمة إلى فكرة الأسواق التخصصية في المباركية: كيف حملت أجزاء السوق أسماء السلع والحرف، ولماذا يهم ذلك لفهم المكان اليوم.',
      'An introduction to the idea of specialist souqs within Al-Mubarakiya: how different sections took names from goods and crafts, and why that still matters today.'
    ),
    hero: l(
      'المباركية ليست اسمًا واحدًا فقط، بل شبكة من أسماء وأسواق فرعية حملت هوية السلع والمهن والحياة اليومية في الكويت القديمة.',
      'Al-Mubarakiya is not just one name, but a network of sub-markets whose identity grew out of goods, trades and everyday life in old Kuwait.'
    ),
    intro: l(
      'هذه الصفحة تساعد الزائر على قراءة السوق بوصفه طبقات من التخصصات، لا مجرد صف طويل من المتاجر المتشابهة.',
      'This page helps visitors read the souk as layers of specialisation, rather than as one long line of similar shops.'
    ),
    highlights: [
      { label: l('الفكرة الأساسية', 'Core idea'), value: l('أسواق بحسب السلع والحرف', 'Markets shaped by goods and trades') },
      { label: l('القيمة اليوم', 'Value today'), value: l('فهم أعمق للمكان', 'A deeper read of place') },
      { label: l('الأنسب لـ', 'Best for'), value: l('الجولات التاريخية والمشاة الفضوليين', 'Heritage walks and curious visitors') }
    ],
    sections: [
      {
        title: l('ما معنى السوق التخصصي؟', 'What is a specialist souq?'),
        body: l(
          'هو جزء من النسيج التجاري ارتبط بنوع محدد من السلع أو الحرف، ما جعل الاسم نفسه مفتاحًا لفهم وظيفة المكان.',
          'It is a part of the commercial fabric associated with a specific kind of goods or craft, making the name itself a clue to the role of that area.'
        )
      },
      {
        title: l('لماذا يهم هذا اليوم؟', 'Why does this matter today?'),
        body: l(
          'لأن الزائر عندما يعرف منطق التخصص يفهم لماذا تبدو بعض الممرات مختلفة في الإحساس والوظيفة حتى الآن.',
          'Because once a visitor understands the logic of specialisation, it becomes easier to see why some lanes still feel different in purpose and atmosphere.'
        ),
        bullets: [
          l('الأسماء القديمة جزء من الذاكرة الحضرية', 'Old names are part of urban memory'),
          l('التجارة تغيّرت لكن الأثر بقي', 'Trade changed, but traces remain'),
          l('المعنى التاريخي يثري الجولة القصيرة', 'Historical meaning enriches even a short walk')
        ]
      },
      {
        title: l('كيف ألاحظ ذلك أثناء الزيارة؟', 'How can I notice this during the visit?'),
        body: l(
          'راقب تكرار أنواع السلع، وطبيعة العرض، وحركة الناس، وما إذا كانت بعض الجهات تبدو أكثر تخصصًا من غيرها.',
          'Watch for repeated goods, patterns of display, movement of people, and whether certain parts feel more specialised than others.'
        )
      }
    ],
    verify: l(
      'أي تسمية تاريخية دقيقة لأجزاء السوق ينبغي ربطها لاحقًا بمصدر واضح أو تحقق ميداني حديث، لا بذاكرة شفهية فقط.',
      'Any precise historical naming of souk sections should later be tied to a clear source or current field verification, not oral memory alone.'
    ),
    related: ['heritage/history', 'heritage/architecture', 'shopping/market-zones-map']
  },
  {
    slug: 'heritage/architecture',
    category: l('التاريخ والثقافة', 'History and culture'),
    title: l('عمارة سوق المباركية', 'Architecture of Souk Al-Mubarakiya'),
    seoTitle: l('عمارة سوق المباركية | الظل والخشب والممرات', 'Architecture of Souk Al-Mubarakiya | Shade, wood and lanes'),
    description: l(
      'كيف يقرأ الزائر عمارة المباركية؟ صفحة تمهيدية عن الممرات المسقوفة والعناصر الخشبية وطابع السوق كاستجابة للمناخ والوظيفة.',
      'How should a visitor read the architecture of Al-Mubarakiya? An introductory page on covered lanes, wooden elements and the souk’s built response to climate and function.'
    ),
    hero: l(
      'جمال المباركية ليس مجرد ديكور؛ كثير من ملامحه المعمارية مرتبط بالظل والتهوية والحركة التجارية اليومية.',
      'The beauty of Al-Mubarakiya is not just decorative; many of its architectural features are tied to shade, ventilation and daily commercial movement.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على ملاحظة ما يجعل السوق مختلفًا بصريًا ووظيفيًا عن مركز تجاري حديث مغلق.',
      'This page helps you notice what makes the souk visually and functionally different from a modern enclosed shopping centre.'
    ),
    highlights: [
      { label: l('الفكرة', 'Key idea'), value: l('العمارة تخدم المناخ والحركة', 'Architecture serves climate and movement') },
      { label: l('أبرز ما يلاحظ', 'Most visible'), value: l('الظل والخشب والممرات', 'Shade, wood and lanes') },
      { label: l('الأنسب لـ', 'Best for'), value: l('التصوير والقراءة البصرية', 'Photography and visual reading') }
    ],
    sections: [
      {
        title: l('ما الذي يميز عمارة السوق؟', 'What stands out in the souk’s architecture?'),
        body: l(
          'الممرات المتتابعة، والانتقال بين الظل والضوء، والعناصر الخشبية التي تعطي السوق ملمسه البصري المميز.',
          'Sequential lanes, transitions between shade and light, and wooden elements that give the souk its distinct visual texture.'
        )
      },
      {
        title: l('هل الجمال هنا وظيفي؟', 'Is the beauty here functional?'),
        body: l(
          'في كثير من الحالات نعم؛ فالبنية تخدم التهوية وتخفيف الشمس وتسهيل الحركة أكثر مما تخدم الاستعراض فقط.',
          'In many cases yes; the built form serves ventilation, solar relief and movement more than display alone.'
        ),
        bullets: [
          l('راقب كيف يتغير الضوء داخل الممرات', 'Notice how light changes through the lanes'),
          l('التقط العلاقة بين الواجهات والظل لا الواجهة وحدها', 'Photograph the relation between facades and shade, not just the facade alone'),
          l('قارن بين الأجزاء الأقدم والأكثر تجديدًا', 'Compare older-feeling parts with more renewed areas')
        ]
      },
      {
        title: l('كيف تفيد هذه القراءة الزائر؟', 'How does this architectural reading help a visitor?'),
        body: l(
          'تجعل الجولة أبطأ قليلًا وأكثر وعيًا، وتحوّل السوق من مكان شراء فقط إلى تجربة حضرية وثقافية.',
          'It slows the walk slightly in a good way and turns the souk from a place of purchases into an urban and cultural experience.'
        )
      }
    ],
    verify: l(
      'التفاصيل التاريخية الدقيقة لبعض العناصر تحتاج إسنادًا أوثق إذا أضيفت لاحقًا، أما هذه الصفحة فتركز على القراءة البصرية العامة.',
      'Any later addition of precise historical detail for particular elements needs stronger sourcing; this page is focused on broad visual interpretation.'
    ),
    related: ['heritage/history', 'heritage/traditional-souqs', 'routes/half-day-heritage']
  },
  {
    slug: 'heritage/fire-and-restoration',
    category: l('التاريخ والثقافة', 'History and culture'),
    title: l('حريق المباركية وأعمال الترميم', 'The Al-Mubarakiya fire and restoration'),
    seoTitle: l('حريق المباركية وأعمال الترميم | ما الذي يجب فهمه؟', 'The Al-Mubarakiya fire and restoration | What visitors should understand'),
    description: l(
      'صفحة تمهيدية تشرح لماذا يشكل حريق 2022 وأعمال الترميم جزءًا مهمًا من قصة المباركية المعاصرة، من دون الخلط بين ما أُنجز وما لا يزال محل متابعة.',
      'An introductory page explaining why the 2022 fire and restoration work form an important part of Al-Mubarakiya’s contemporary story, without confusing what has been completed with what still needs follow-up.'
    ),
    hero: l(
      'فهم المباركية اليوم لا يكتمل من دون فهم ما كشفه الحريق عن قيمة المنطقة التاريخية وحساسية ترميمها.',
      'Understanding Al-Mubarakiya today is incomplete without understanding what the fire revealed about the value of the historic area and the sensitivity of restoring it.'
    ),
    intro: l(
      'هذه الصفحة لا تدّعي تحديثًا لحظيًا، بل تقدّم إطارًا يساعد الزائر على قراءة الموضوع بتمييز بين الحدث نفسه وبين وضع الأعمال لاحقًا.',
      'This page does not claim live updates; it offers a framework that helps visitors distinguish between the event itself and the later state of restoration work.'
    ),
    highlights: [
      { label: l('المحور', 'Focus'), value: l('الحدث والذاكرة والترميم', 'Event, memory and restoration') },
      { label: l('الأهم', 'Most important'), value: l('تمييز ما أُنجز مما لا يزال قيد المتابعة', 'Separate completed work from ongoing follow-up') },
      { label: l('الأنسب لـ', 'Best for'), value: l('من يريد قراءة معاصرة للمكان', 'Visitors wanting a contemporary reading of place') }
    ],
    sections: [
      {
        title: l('لماذا يهم هذا الحدث؟', 'Why does this event matter?'),
        body: l(
          'لأنه أعاد توجيه الانتباه إلى هشاشة النسيج التاريخي وأهمية التوثيق والحماية والترميم المدروس.',
          'Because it redirected attention to the fragility of the historic fabric and the importance of documentation, protection and careful restoration.'
        )
      },
      {
        title: l('ما الذي يجب على الزائر فهمه؟', 'What should a visitor understand?'),
        body: l(
          'أن الحديث عن الحريق ليس مجرد خبر ماضٍ، بل جزء من النقاش الجاري حول صون الهوية العمرانية وإبقاء السوق حيًا.',
          'That discussion of the fire is not just about a past incident, but part of an ongoing conversation about protecting urban identity while keeping the souk alive.'
        ),
        bullets: [
          l('لا تخلط بين الأضرار وبين الوضع الحالي كله', 'Do not equate the damage with the whole current condition'),
          l('افصل بين الخبر التاريخي ووضع التشغيل الحالي', 'Separate historical reporting from current operational status'),
          l('ابحث دائمًا عن تاريخ المراجعة عند أي تحديث لاحق', 'Always look for review dates in any later update')
        ]
      },
      {
        title: l('كيف نطوّر هذه الصفحة لاحقًا؟', 'How should this page evolve later?'),
        body: l(
          'بإضافة تواريخ مراجعة واضحة، وتمييز صريح بين ما تم ترميمه فعليًا وما بقي ضمن الخطط أو المتابعة.',
          'By adding clear review dates and explicitly separating work that has been completed from work still in planning or follow-up.'
        )
      }
    ],
    verify: l(
      'قبل اعتماد أي معلومة تشغيلية أو عمرانية حديثة، يجب ربطها بمصدر مؤرخ وحديث، لأن هذا الموضوع يتغير مع الزمن.',
      'Before relying on any current operational or restoration detail, tie it to a recent dated source, because this topic changes over time.'
    ),
    related: ['heritage/history', 'heritage/architecture', 'heritage/safat-square']
  },
  {
    slug: 'heritage/safat-square',
    category: l('التاريخ والثقافة', 'History and culture'),
    title: l('ساحة الصفاة والمباركية', 'Safat Square and Al-Mubarakiya'),
    seoTitle: l('ساحة الصفاة والمباركية | قراءة في قلب الكويت القديم', 'Safat Square and Al-Mubarakiya | Reading the old heart of Kuwait'),
    description: l(
      'صفحة تمهيدية عن ساحة الصفاة وعلاقتها بالمباركية ووسط مدينة الكويت، ولماذا تفيد كامتداد ثقافي للمشي لا كمعلم منفصل فقط.',
      'An introductory page on Safat Square and its relation to Al-Mubarakiya and central Kuwait City, and why it works as a cultural walking extension rather than only a separate landmark.'
    ),
    hero: l(
      'إذا كان السوق يقدّم ذاكرة التجارة، فإن الصفاة تساعد على قراءة الفضاء المدني الأوسع الذي أحاط بتلك الحياة التجارية.',
      'If the souk expresses the memory of trade, Safat Square helps visitors read the wider civic space that surrounded that commercial life.'
    ),
    intro: l(
      'هذه الصفحة مفيدة لمن يريد توسيع الجولة قليلًا خارج الممرات، مع الاحتفاظ بالخيط التاريخي نفسه.',
      'This page is useful for visitors who want to extend the walk slightly beyond the lanes while keeping the same historical thread.'
    ),
    highlights: [
      { label: l('أفضل استخدام', 'Best use'), value: l('امتداد قصير لجولة التاريخ', 'A short extension of the heritage walk') },
      { label: l('القيمة', 'Value'), value: l('ربط السوق بالفضاء العام', 'Linking the souk to public civic space') },
      { label: l('الأنسب لـ', 'Best for'), value: l('المشي الثقافي والتصوير الحضري', 'Cultural walking and urban photography') }
    ],
    sections: [
      {
        title: l('لماذا ترتبط الصفاة بالمباركية؟', 'Why is Safat Square linked to Al-Mubarakiya?'),
        body: l(
          'لأن فهم قلب الكويت القديم يمر عبر الأسواق والساحات معًا، لا عبر أحدهما بمعزل عن الآخر.',
          'Because the old heart of Kuwait is best understood through markets and squares together, not through either one in isolation.'
        )
      },
      {
        title: l('متى أضيف الصفاة إلى الجولة؟', 'When should I add Safat Square to the route?'),
        body: l(
          'عندما تريد تمديد المسار التاريخي قليلًا من دون الانتقال إلى برنامج متحفي كامل أو رحلة أطول.',
          'When you want to stretch the historical route slightly without committing to a full museum plan or a much longer outing.'
        ),
        bullets: [
          l('اجمعها مع السوق في نصف يوم هادئ', 'Pair it with the souk in a calm half-day plan'),
          l('اختر ضوءًا مناسبًا إذا كان التصوير مهمًا', 'Pick a useful light window if photography matters'),
          l('راقب المسافة والحرارة إذا كانت الزيارة سيرًا بالكامل', 'Watch distance and heat if the whole plan is on foot')
        ]
      },
      {
        title: l('ما الذي تضيفه للزائر؟', 'What does it add for visitors?'),
        body: l(
          'تضيف إحساسًا أوسع بالمدينة القديمة، وتضع السوق ضمن شبكة علاقات حضرية لا كمشهد منفصل.',
          'It adds a wider sense of the old city and places the souk within an urban network rather than as an isolated scene.'
        )
      }
    ],
    verify: l(
      'تعامل مع هذه الصفحة كإطار للمشي الثقافي، ثم راجع ظروف الوصول والوقت والمسافة الفعلية في يوم الزيارة.',
      'Use this page as a framework for a cultural walk, then review real access, timing and distance conditions on the day.'
    ),
    related: ['heritage/history', 'routes/half-day-heritage', 'nearby/grand-mosque']
  },
  {
    slug: 'shopping/spice-market',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('سوق البهارات في المباركية', 'Spice market in Al-Mubarakiya'),
    seoTitle: l('سوق البهارات في المباركية | ما الذي يلاحظه الزائر؟', 'Spice market in Al-Mubarakiya | What should visitors notice?'),
    description: l(
      'مقدمة عملية إلى تجربة البهارات في المباركية: ما الذي يجذب الزائر، وكيف يتعامل مع الرائحة والاختيار والشراء بهدوء.',
      'A practical introduction to the spice experience in Al-Mubarakiya: what draws visitors in, and how to approach aroma, selection and buying with calm judgment.'
    ),
    hero: l(
      'البهارات من أسرع ما يترك أثرًا في الذاكرة داخل السوق، لأنها تجمع بين الرائحة واللون وفكرة الهدايا والطبخ اليومي في وقت واحد.',
      'Spices are one of the quickest ways the souk stays in memory, because they combine aroma, colour and the idea of gifts and daily cooking all at once.'
    ),
    intro: l(
      'هذه الصفحة تفيد من يريد المشاهدة والشراء الخفيف معًا، ومن يريد فهم لماذا تعد البهارات جزءًا أساسيًا من هوية السوق.',
      'This page is for visitors who want both browsing and light buying, and for anyone who wants to understand why spices are so central to the identity of the souk.'
    ),
    highlights: [
      { label: l('الأكثر جاذبية', 'Most appealing'), value: l('الرائحة والتنوع', 'Aroma and variety') },
      { label: l('أفضل نهج', 'Best approach'), value: l('المقارنة ثم الشراء', 'Compare first, buy second') },
      { label: l('مهم', 'Important'), value: l('اسأل عن الكمية والسعر بوضوح', 'Ask clearly about quantity and pricing') }
    ],
    sections: [
      {
        title: l('لماذا تجذب منطقة البهارات الزوار؟', 'Why does the spice area attract visitors?'),
        body: l(
          'لأنها تقدّم إحساسًا فوريًا بالمكان عبر الرائحة واللون ونمط العرض التقليدي.',
          'Because it creates an immediate sense of place through aroma, colour and traditional-style display.'
        )
      },
      {
        title: l('كيف أختار بهدوء؟', 'How should I choose calmly?'),
        body: l(
          'ابدأ بما تريد استخدامه أو إهداءه، ثم اسأل عن الأنواع والكمية، وتجنب الشراء المتسرع فقط لأن العرض جميل.',
          'Start from what you actually want to use or gift, then ask about types and quantity, and avoid buying in haste just because the display is attractive.'
        ),
        bullets: [
          l('قارن بين أكثر من بائع قبل القرار', 'Compare more than one seller before deciding'),
          l('راجع التغليف إذا كانت الهدية أو السفر مهمين', 'Check packaging if gifting or travel matters'),
          l('اشترِ بقدر يناسب الاستخدام الحقيقي', 'Buy an amount that suits real use')
        ]
      },
      {
        title: l('هل تستحق الزيارة حتى بلا شراء؟', 'Is it worth visiting even without buying?'),
        body: l(
          'نعم، لأنها جزء بصري وحسي مهم من تجربة المشي في المباركية.',
          'Yes, because it is a major sensory and visual part of the Al-Mubarakiya walk.'
        )
      }
    ],
    verify: l(
      'إذا كان الشراء جديًا أو مخصصًا للسفر، فاسأل مباشرة عن التخزين والتغليف وطبيعة المنتج قبل الدفع.',
      'If the purchase is serious or meant for travel, ask directly about storage, packaging and product type before paying.'
    ),
    related: ['shopping/dates-sweets', 'shopping/market-zones-map', 'food/coffee-tea']
  },
  {
    slug: 'shopping/dates-sweets',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('التمور والحلويات في المباركية', 'Dates and sweets in Al-Mubarakiya'),
    seoTitle: l('التمور والحلويات في المباركية | هدايا السوق ومذاقه', 'Dates and sweets in Al-Mubarakiya | Souk gifts and flavours'),
    description: l(
      'دليل تمهيدي لاختيار التمور والحلويات في المباركية كهدايا أو كمذاق محلي، مع نصائح للمقارنة والكمية والتوقيت.',
      'An introductory guide to choosing dates and sweets in Al-Mubarakiya as gifts or as part of the local flavour, with tips on comparison, quantity and timing.'
    ),
    hero: l(
      'التمور والحلويات من أسهل ما يحمله الزائر معه من السوق، لأنها تجمع بين الذوق المحلي والهدايا العملية.',
      'Dates and sweets are among the easiest things for visitors to take away from the souk, combining local taste with practical gifting.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على التفكير في الشراء كاختيار ذكي وخفيف، لا كحمل زائد في نهاية يوم متعب.',
      'This page helps you treat buying as a smart light decision rather than extra weight at the end of a tiring day.'
    ),
    highlights: [
      { label: l('مناسب لـ', 'Good for'), value: l('الهدايا الخفيفة والذوق المحلي', 'Light gifts and local flavour') },
      { label: l('أفضل وقت', 'Best timing'), value: l('بعد الجولة الأساسية', 'After the main walk') },
      { label: l('تنبيه', 'Watch for'), value: l('الكمية والتغليف', 'Quantity and packaging') }
    ],
    sections: [
      {
        title: l('لماذا هذا الشراء مناسب للزائر؟', 'Why is this a visitor-friendly purchase?'),
        body: l(
          'لأنه يجمع بين القيمة الرمزية وسهولة الحمل مقارنة بمشتريات أكبر أو أكثر حساسية.',
          'Because it combines symbolic value with easier carrying compared with bulkier or more delicate purchases.'
        )
      },
      {
        title: l('كيف أشتري بشكل عملي؟', 'How should I buy in a practical way?'),
        body: l(
          'ابدأ بالسؤال عن الأنواع، ثم حدّد إن كان الهدف تذوقًا شخصيًا أو هدية، واختر الكمية بناء على ذلك.',
          'Start by asking about the types, then decide whether the goal is personal tasting or gifting, and size the quantity accordingly.'
        ),
        bullets: [
          l('خفف المشتريات إذا كنت ستكمل المشي طويلًا', 'Keep purchases light if you still have a long walk ahead'),
          l('اسأل عن أفضل تغليف للهدايا أو السفر', 'Ask about the best packaging for gifts or travel'),
          l('قارن بين أكثر من خيار قبل اعتماد شكل واحد', 'Compare more than one option before settling on a format')
        ]
      },
      {
        title: l('هل أشتري في بداية الجولة أم آخرها؟', 'Should I buy early or late in the visit?'),
        body: l(
          'غالبًا آخرها أفضل، حتى لا تتحول الأكياس إلى عبء أثناء المشي في بقية السوق.',
          'Usually later is better, so the bags do not become an unnecessary burden for the rest of the walk.'
        )
      }
    ],
    verify: l(
      'إذا كان التغليف أو مدة الحفظ مهمين، فاسأل مباشرة قبل الشراء بدل افتراض أن كل الأصناف تتعامل بالطريقة نفسها.',
      'If packaging or shelf life matters, ask directly before buying rather than assuming every item works the same way.'
    ),
    related: ['shopping/spice-market', 'shopping/souvenirs', 'food/kuwaiti-dishes']
  },
  {
    slug: 'shopping/perfume-bakhoor',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('العطور والبخور في المباركية', 'Perfume and bakhoor in Al-Mubarakiya'),
    seoTitle: l('العطور والبخور في المباركية | تجربة الرائحة والاختيار', 'Perfume and bakhoor in Al-Mubarakiya | Scent and selection'),
    description: l(
      'مقدمة إلى شراء العطور والبخور في المباركية، مع نصائح لتجربة الروائح بهدوء وفهم الفروق بين التذوق السريع والشراء الجاد.',
      'An introduction to buying perfume and bakhoor in Al-Mubarakiya, with tips on testing scents calmly and distinguishing quick curiosity from serious buying.'
    ),
    hero: l(
      'العطر والبخور من أكثر ما يربط السوق بالذاكرة الشخصية، لكن كثرة الروائح تعني أن القرار يحتاج هدوءًا لا استعجالًا.',
      'Perfume and bakhoor are among the things that tie the souk most strongly to personal memory, but the density of scents means decisions reward patience rather than speed.'
    ),
    intro: l(
      'هذه الصفحة تفيد من يريد تجربة حسية جميلة من دون أن يتحول الاختيار إلى ارتباك بين عشرات الروائح.',
      'This page is for visitors who want an enjoyable sensory experience without turning the process into confusion among dozens of scents.'
    ),
    highlights: [
      { label: l('أفضل نهج', 'Best approach'), value: l('التذوق على مراحل', 'Test in stages') },
      { label: l('مهم', 'Important'), value: l('لا تخلط عددًا كبيرًا من الروائح بسرعة', 'Do not mix too many scents too quickly') },
      { label: l('مناسب لـ', 'Good for'), value: l('الهدايا والشراء الشخصي', 'Gifts and personal purchases') }
    ],
    sections: [
      {
        title: l('لماذا تحتاج هذه المنطقة إلى هدوء؟', 'Why does this area reward a calmer pace?'),
        body: l(
          'لأن كثرة الخيارات قد تجعل الانطباع الأول مضللًا، خاصة إذا انتقلت بسرعة بين روائح كثيرة.',
          'Because an overload of options can make first impressions unreliable, especially if you move quickly through many scents.'
        )
      },
      {
        title: l('كيف أختبر الروائح؟', 'How should I test scents?'),
        body: l(
          'جرّب عددًا محدودًا أولًا، وخذ وقتًا قصيرًا بين كل تجربة وأخرى قبل اتخاذ أي قرار.',
          'Test a limited number first and leave short pauses between them before making any decision.'
        ),
        bullets: [
          l('ابدأ بما يناسب ذوقك المعتاد', 'Start with what already suits your taste'),
          l('فرّق بين هدية عامة واختيار شخصي خاص', 'Separate a general gift from a very personal choice'),
          l('لا تشترِ فقط لأن الرائحة الأولى لفتت الانتباه', 'Do not buy just because the first scent stood out')
        ]
      },
      {
        title: l('ماذا يهم الزائر أكثر؟', 'What matters most for visitors?'),
        body: l(
          'الفهم الواضح لنوع المنتج وطريقة استخدامه والتغليف، خاصة إذا كان الشراء هدية أو جزءًا من السفر.',
          'A clear understanding of product type, use and packaging, especially when the purchase is for gifting or travel.'
        )
      }
    ],
    verify: l(
      'عند الشراء الفعلي، اسأل مباشرة عن النوع وطريقة الحفظ والتغليف بدل الاعتماد على الانطباع الأول فقط.',
      'When buying for real, ask directly about type, storage and packaging instead of relying only on the first impression.'
    ),
    related: ['shopping/souvenirs', 'shopping/spice-market', 'food/coffee-tea']
  },
  {
    slug: 'shopping/bisht-textiles',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('البشوت والمنسوجات في المباركية', 'Bishts and textiles in Al-Mubarakiya'),
    seoTitle: l('البشوت والمنسوجات في المباركية | تسوق تقليدي بوعي', 'Bishts and textiles in Al-Mubarakiya | Traditional shopping with context'),
    description: l(
      'صفحة تمهيدية عن شراء البشوت والمنسوجات والملابس التقليدية في المباركية، مع التركيز على القراءة الثقافية قبل قرار الشراء.',
      'An introductory page on buying bishts, textiles and traditional clothing in Al-Mubarakiya, with emphasis on cultural reading before any purchase decision.'
    ),
    hero: l(
      'المنسوجات والبشوت تكشف جانبًا من مكانة السوق كحافظة للحرف والذوق المحلي، لا كمكان بيع فقط.',
      'Textiles and bishts reveal the souk as a keeper of craft and local taste, not just as a place of sale.'
    ),
    intro: l(
      'هذه الصفحة تفيد من يريد التعرف على هذا الجانب من السوق سواء للفرجة أو للشراء المدروس.',
      'This page is for visitors who want to understand this side of the souk, whether for browsing or for considered buying.'
    ),
    highlights: [
      { label: l('القيمة', 'Value'), value: l('حرفية وهوية محلية', 'Craft and local identity') },
      { label: l('أفضل نهج', 'Best approach'), value: l('فهم الغرض قبل الشراء', 'Understand the purpose before buying') },
      { label: l('مناسب لـ', 'Good for'), value: l('الزوار الفضوليين والهدايا الخاصة', 'Curious visitors and special gifts') }
    ],
    sections: [
      {
        title: l('لماذا يلفت هذا الجانب الانتباه؟', 'Why does this part of the souk stand out?'),
        body: l(
          'لأنه يربط السوق باللباس التقليدي وبأشكال من الحرف والمواد التي تحمل بُعدًا ثقافيًا واضحًا.',
          'Because it links the souk to traditional dress and to forms of craft and material culture with a clear cultural dimension.'
        )
      },
      {
        title: l('كيف أقرر إن كنت مشتريًا فعليًا أم متفرجًا؟', 'How do I decide whether I am buying seriously or just browsing?'),
        body: l(
          'إذا لم يكن لديك غرض واضح أو مناسبة معينة، فابدأ بالمشاهدة والسؤال بدل الانتقال مباشرة إلى قرار الشراء.',
          'If you do not have a clear use or a specific occasion in mind, start with observation and questions rather than moving straight to a purchase.'
        ),
        bullets: [
          l('فرّق بين ما يعجبك بصريًا وما ستستخدمه فعليًا', 'Separate what looks appealing from what you would actually use'),
          l('اسأل عن الخامة والمقاس أو طريقة الاختيار إذا احتجت', 'Ask about fabric, sizing or selection if needed'),
          l('خذ وقتك قبل الشراء في هذا النوع من المنتجات', 'Take your time before buying this kind of item')
        ]
      },
      {
        title: l('ماذا تضيف هذه الجولة لفهم السوق؟', 'What does this add to your understanding of the souk?'),
        body: l(
          'تضيف بعدًا ثقافيًا وحرفيًا يجعل الزيارة أبعد من الطعام والمرور السريع في الممرات.',
          'It adds a craft and cultural layer that pushes the visit beyond food and a quick pass through the lanes.'
        )
      }
    ],
    verify: l(
      'إذا تحولت الزيارة إلى شراء فعلي، فاعتمد على المعلومات المباشرة من البائع حول المقاس والخامة وشروط البيع الحالية.',
      'If the visit turns into a real purchase, rely on direct seller information about fabric, sizing and current terms of sale.'
    ),
    related: ['shopping/souvenirs', 'heritage/traditional-souqs', 'routes/half-day-heritage']
  },
  {
    slug: 'shopping/souvenirs',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('الهدايا التذكارية في المباركية', 'Souvenirs in Al-Mubarakiya'),
    seoTitle: l('الهدايا التذكارية في المباركية | ماذا يشتري الزائر؟', 'Souvenirs in Al-Mubarakiya | What should visitors buy?'),
    description: l(
      'دليل تمهيدي للهدايا التذكارية في المباركية، يساعدك على اختيار تذكار خفيف وذي معنى من دون شراء عشوائي أو حمل زائد.',
      'An introductory guide to souvenirs in Al-Mubarakiya, helping you choose something light and meaningful without random buying or unnecessary weight.'
    ),
    hero: l(
      'أفضل تذكار من السوق ليس أغلى ما تجده، بل ما يحمل معنى واضحًا ويستحق أن يعود معك.',
      'The best souvenir from the souk is not necessarily the most expensive thing you find, but the one that carries clear meaning and is worth taking home.'
    ),
    intro: l(
      'هذه الصفحة موجهة لمن يريد شراء شيء واحد جيد أو مجموعة خفيفة من الهدايا من دون تحويل الجولة إلى مهمة تسوق مرهقة.',
      'This page is for visitors who want one good purchase or a light set of gifts without turning the whole outing into a tiring shopping mission.'
    ),
    highlights: [
      { label: l('الأفضل', 'Best choice'), value: l('شيء خفيف وواضح المعنى', 'Something light and meaningful') },
      { label: l('متى تشتري', 'When to buy'), value: l('نهاية الجولة غالبًا', 'Usually near the end of the visit') },
      { label: l('تجنب', 'Avoid'), value: l('الشراء بدافع اللحظة فقط', 'Impulse-only buying') }
    ],
    sections: [
      {
        title: l('ما الذي يجعل الهدية مناسبة؟', 'What makes a souvenir a good choice?'),
        body: l(
          'أن تكون سهلة الحمل، مفهومة المعنى، ومتصلة فعلًا بتجربة السوق أو الثقافة المحلية.',
          'It should be easy to carry, clear in meaning, and genuinely connected to the souk or local culture.'
        )
      },
      {
        title: l('كيف أشتري بذكاء؟', 'How do I shop for souvenirs intelligently?'),
        body: l(
          'حدّد ميزانية وعددًا تقريبيًا للهدايا من البداية، ثم اشترِ ما يلائم ذلك بدل التجميع غير المنظم.',
          'Set a budget and an approximate number of gifts from the start, then buy to match that instead of accumulating things without a plan.'
        ),
        bullets: [
          l('اشترِ متأخرًا إذا كنت ستواصل المشي', 'Buy later if you still plan to keep walking'),
          l('فضّل ما لا يرهقك في السفر والعودة', 'Prefer items that stay easy through travel and the trip back'),
          l('ركّز على الجودة أو المعنى لا على العدد', 'Focus on quality or meaning rather than sheer count')
        ]
      },
      {
        title: l('هل يمكن الجمع بين الهدية والتجربة؟', 'Can a souvenir also deepen the experience?'),
        body: l(
          'نعم، عندما يكون الاختيار نابعًا من فهم السوق ومجالاته، لا من مجرد شراء سريع عند الخروج.',
          'Yes, when the choice grows out of understanding the souk and its different zones rather than a rushed last-minute purchase.'
        )
      }
    ],
    verify: l(
      'إذا كانت الهدية مرتبطة بالسفر أو بالنقل الجوي، فراجع الوزن والتغليف والملاءمة قبل أن تعتمد القرار النهائي.',
      'If the gift is tied to air travel or longer transport, review weight, packaging and practicality before finalising the decision.'
    ),
    related: ['shopping/dates-sweets', 'shopping/perfume-bakhoor', 'shopping/bargaining-payment']
  },
  {
    slug: 'shopping/bargaining-payment',
    category: l('التسوق في السوق', 'Shopping in the souk'),
    title: l('المساومة والدفع في المباركية', 'Bargaining and payment in Al-Mubarakiya'),
    seoTitle: l('المساومة والدفع في المباركية | ما الذي يجب معرفته؟', 'Bargaining and payment in Al-Mubarakiya | What should visitors know?'),
    description: l(
      'صفحة عملية تساعد الزائر على التعامل مع السعر ووسائل الدفع في المباركية بهدوء واحترام ومن دون افتراضات خاطئة.',
      'A practical page helping visitors handle pricing and payment in Al-Mubarakiya calmly and respectfully, without relying on false assumptions.'
    ),
    hero: l(
      'التسوق المريح في السوق لا يعتمد على خفض السعر فقط، بل على وضوح التوقعات وفهم متى تسأل ومتى تشتري ومتى تترك الصفقة.',
      'Comfortable souk shopping is not just about lowering a price; it depends on clear expectations and knowing when to ask, buy, or walk away.'
    ),
    intro: l(
      'هذه الصفحة لا تقدم قواعد جامدة، بل إطارًا سلوكيًا وعمليًا لتجنب الإحراج أو سوء الفهم أثناء الشراء.',
      'This page does not offer rigid rules; it gives a behavioural and practical framework that helps avoid awkwardness or misunderstanding while buying.'
    ),
    highlights: [
      { label: l('الأهم', 'Most important'), value: l('السؤال الواضح والهادئ', 'Clear calm questions') },
      { label: l('وسائل الدفع', 'Payment'), value: l('اسأل قبل الشراء', 'Ask before committing') },
      { label: l('أفضل نهج', 'Best approach'), value: l('قارِن باحترام ثم قرر', 'Compare respectfully, then decide') }
    ],
    sections: [
      {
        title: l('هل المساومة جزء من التجربة؟', 'Is bargaining part of the experience?'),
        body: l(
          'في بعض الحالات نعم، لكن الأهم للزائر هو أن يبقى السؤال مهذبًا وواضحًا وألا يُبنى على افتراض أن كل شيء قابل للتفاوض.',
          'Sometimes yes, but the more important point for visitors is that any discussion stays polite and clear, without assuming everything is automatically negotiable.'
        )
      },
      {
        title: l('كيف أسأل عن السعر والدفع؟', 'How should I ask about price and payment?'),
        body: l(
          'ابدأ بالسعر النهائي وطريقة الدفع المقبولة، ثم قارِن بين أكثر من خيار إذا كان الشراء غير عاجل.',
          'Start with the final price and accepted payment method, then compare more than one option if the purchase is not urgent.'
        ),
        bullets: [
          l('اسأل قبل التغليف أو الإنهاء', 'Ask before packing or final steps begin'),
          l('تأكد من طريقة الدفع المقبولة قبل الالتزام', 'Confirm the accepted payment method before committing'),
          l('اترك الصفقة بهدوء إذا لم تناسبك', 'Walk away calmly if it does not suit you')
        ]
      },
      {
        title: l('ما الذي يهم الزائر أكثر من فكرة المساومة نفسها؟', 'What matters more than bargaining itself?'),
        body: l(
          'الوضوح، والاحترام، ومعرفة ما تشتريه فعلًا، لأن ذلك يحميك أكثر من أي فكرة نمطية عن السوق.',
          'Clarity, respect and knowing what you are actually buying, because those protect you more than any stereotype about souks.'
        )
      }
    ],
    verify: l(
      'قبل الدفع، تأكد من السعر النهائي وطريقة الدفع وما إذا كانت هناك تفاصيل إضافية تهمك كالتغليف أو الكمية أو الإيصال.',
      'Before paying, confirm the final price, payment method and any extra detail that matters to you such as packaging, quantity or a receipt.'
    ),
    related: ['shopping/gold-market', 'shopping/souvenirs', 'food/restaurants']
  },
  {
    slug: 'food/kuwaiti-dishes',
    category: l('الطعام والمقاهي', 'Food and cafes'),
    title: l('أكلات كويتية تجرّبها في المباركية', 'Kuwaiti dishes to try in Al-Mubarakiya'),
    seoTitle: l('أكلات كويتية تجرّبها في المباركية | ماذا تأكل؟', 'Kuwaiti dishes to try in Al-Mubarakiya | What should you eat?'),
    description: l(
      'صفحة تمهيدية تساعد الزائر على فهم أنواع الأكلات الكويتية التي يمكن البحث عنها في المباركية من دون تحويل الدليل إلى قائمة مطاعم دعائية.',
      'An introductory page helping visitors understand the kinds of Kuwaiti dishes to look for in Al-Mubarakiya without turning the guide into a promotional restaurant list.'
    ),
    hero: l(
      'إذا كنت تزور المباركية لأول مرة، فاختيار نوع الطبق أحيانًا أهم من اختيار اسم المطعم نفسه.',
      'If you are visiting Al-Mubarakiya for the first time, choosing the type of dish can matter more than choosing a restaurant name.'
    ),
    intro: l(
      'هذه الصفحة تنظّم مشهد الطعام بحسب النوع: أطباق أرز، لحم، بحريات، خبز، حلويات، ومشروبات تقليدية.',
      'This page organises the food scene by type: rice dishes, meat, seafood, breads, sweets and traditional drinks.'
    ),
    highlights: [
      { label: l('أفضل للزيارة الأولى', 'Best for first visits'), value: l('طبق محلي واضح مع مشروب بسيط', 'One clear local dish with a simple drink') },
      { label: l('الفكرة', 'Key idea'), value: l('اختر النوع قبل المكان', 'Pick the dish type before the venue') },
      { label: l('مناسب لـ', 'Good for'), value: l('من يريد تجربة المطبخ الكويتي', 'Anyone wanting a Kuwaiti food introduction') }
    ],
    sections: [
      {
        title: l('كيف أختار من المطبخ الكويتي؟', 'How should I choose from Kuwaiti cuisine?'),
        body: l(
          'ابدأ بما يناسب شهيتك والوقت المتاح، ثم وسّع التجربة لاحقًا بدل محاولة تذوق كل شيء في زيارة واحدة.',
          'Start with what suits your appetite and the time available, then widen the experience later instead of trying everything in one visit.'
        )
      },
      {
        title: l('ما الأنواع التي يبحث عنها الزائر عادة؟', 'What kinds of dishes do visitors usually look for?'),
        body: l(
          'أطباق الأرز واللحم أو البحر، والأكلات الشعبية الخفيفة، والحلويات أو القهوة كخاتمة للجولة.',
          'Rice-and-meat or seafood dishes, lighter popular foods, and sweets or coffee as a finish to the walk.'
        ),
        bullets: [
          l('اختر طبقًا رئيسيًا واحدًا في الزيارة القصيرة', 'Choose one main dish on a short visit'),
          l('اترك الحلويات أو القهوة لنهاية الجولة', 'Leave sweets or coffee for the end'),
          l('اسأل عمّا يناسب المشاركة إن كنت مع مجموعة', 'Ask what works well for sharing if you are with a group')
        ]
      },
      {
        title: l('كيف أجعل التجربة أوضح؟', 'How can I make the food experience clearer?'),
        body: l(
          'اعرف إن كنت تريد وجبة كاملة أم مجرد تذوق سريع، فهذا القرار يختصر كثيرًا من التردد.',
          'Know whether you want a full meal or just a quick taste, because that choice removes a lot of hesitation.'
        )
      }
    ],
    verify: l(
      'إذا كانت لديك قيود غذائية أو حساسية، فلا تعتمد على الوصف العام هنا وحده واسأل مباشرة قبل الطلب.',
      'If you have dietary restrictions or allergies, do not rely on the general description alone and ask directly before ordering.'
    ),
    related: ['food/restaurants', 'food/breakfast', 'food/seafood-grills']
  },
  {
    slug: 'food/seafood-grills',
    category: l('الطعام والمقاهي', 'Food and cafes'),
    title: l('المأكولات البحرية والمشويات في المباركية', 'Seafood and grills in Al-Mubarakiya'),
    seoTitle: l('المأكولات البحرية والمشويات في المباركية | كيف تختار؟', 'Seafood and grills in Al-Mubarakiya | How should you choose?'),
    description: l(
      'مقدمة إلى خيارين من أكثر ما يبحث عنه الزوار في المباركية: المأكولات البحرية والمشويات، مع نصائح لاختيار الوجبة والوقت المناسب.',
      'An introduction to two of the things visitors most often look for in Al-Mubarakiya: seafood and grills, with practical advice on choosing the right meal and timing.'
    ),
    hero: l(
      'إذا كنت تريد وجبة أوضح وأكثر مباشرة في المباركية، فعادة ما يذهب التفكير سريعًا إلى البحريات أو المشويات.',
      'If you want a straightforward substantial meal in Al-Mubarakiya, thought often turns quickly toward seafood or grills.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على اتخاذ قرار عملي بين خيارين محبوبين، بحسب الوقت والشهية وطبيعة المجموعة.',
      'This page helps you make a practical choice between two popular directions, depending on timing, appetite and the type of group you are with.'
    ),
    highlights: [
      { label: l('للوجبة الأوضح', 'For a more direct meal'), value: l('المشويات أو السمك', 'Grills or seafood') },
      { label: l('الأفضل', 'Best timing'), value: l('وقت وجبة واضح لا بين المحطات', 'A defined meal window, not between stops') },
      { label: l('مهم', 'Important'), value: l('حدد إن كنت تريد وجبة ثقيلة أو أخف', 'Know whether you want a heavier or lighter meal') }
    ],
    sections: [
      {
        title: l('متى أختار البحريات؟', 'When should I choose seafood?'),
        body: l(
          'عندما تكون الوجبة جزءًا أساسيًا من الزيارة، أو عندما تريد تجربة ذات طابع بحري أو محلي أوضح.',
          'When the meal is a key part of the visit, or when you want a distinctly maritime or local-flavour experience.'
        )
      },
      {
        title: l('ومتى تكون المشويات أنسب؟', 'When are grills the better fit?'),
        body: l(
          'غالبًا عندما تريد خيارًا مألوفًا وواضحًا للمجموعة، أو حين يكون الوقت محدودًا نسبيًا.',
          'Often when you want something familiar and clear for a group, or when time is somewhat limited.'
        ),
        bullets: [
          l('اختر وقتًا يسمح بالجلوس لا الاستعجال', 'Choose a time that allows sitting, not rushing'),
          l('خفف بقية الجولة إذا كانت الوجبة ثقيلة', 'Lighten the rest of the route if the meal is heavy'),
          l('اسأل عن المشاركة إذا كانت المجموعة كبيرة', 'Ask about sharing if the group is larger')
        ]
      },
      {
        title: l('كيف أخطط ما بعد الوجبة؟', 'How should I plan after the meal?'),
        body: l(
          'بعد وجبة كاملة يكون من الأفضل أن تتحول الخطة إلى مشي خفيف أو قهوة قصيرة بدل مواصلة برنامج طويل مكثف.',
          'After a full meal, it usually helps to shift the plan toward lighter walking or a short coffee stop rather than continuing an intense schedule.'
        )
      }
    ],
    verify: l(
      'إذا كان الوقت ضيقًا أو المجموعة متعبة، فاختر ما يلائم الإيقاع العام لليوم بدل السعي وراء الوجبة الأكبر دائمًا.',
      'If time is tight or the group is already tired, choose what matches the day’s overall rhythm rather than always chasing the biggest meal.'
    ),
    related: ['food/restaurants', 'food/evening-dining', 'food/kuwaiti-dishes']
  },
  {
    slug: 'food/breakfast',
    category: l('الطعام والمقاهي', 'Food and cafes'),
    title: l('فطور المباركية', 'Breakfast in Al-Mubarakiya'),
    seoTitle: l('فطور المباركية | زيارة صباحية مع طعام خفيف', 'Breakfast in Al-Mubarakiya | A morning visit with light food'),
    description: l(
      'كيف تبدو زيارة المباركية صباحًا مع فطور أو قهوة؟ صفحة عملية عن مزايا الصباح وما يناسبه من إيقاع وطعام وجولة قصيرة.',
      'What does a morning visit to Al-Mubarakiya with breakfast or coffee feel like? A practical page on the advantages of morning timing and the lighter rhythm that suits it.'
    ),
    hero: l(
      'الفطور في المباركية ليس فقط وجبة، بل طريقة مختلفة لرؤية السوق عندما يكون أهدأ وأسهل للحركة.',
      'Breakfast in Al-Mubarakiya is not only a meal; it is a different way of seeing the souk when it is calmer and easier to move through.'
    ),
    intro: l(
      'هذه الصفحة مناسبة لمن يريد زيارة صباحية مختصرة أو بداية يوم لطيفة في وسط مدينة الكويت.',
      'This page suits visitors who want a shorter morning outing or a gentle start to the day in central Kuwait City.'
    ),
    highlights: [
      { label: l('الأفضل', 'Best for'), value: l('الزيارة الصباحية الهادئة', 'A calm morning visit') },
      { label: l('الإيقاع', 'Pace'), value: l('خفيف وواضح', 'Light and clear') },
      { label: l('يصلح لـ', 'Works well for'), value: l('الأزواج والعائلات والزيارات السريعة', 'Couples, families and shorter visits') }
    ],
    sections: [
      {
        title: l('لماذا تفيد الزيارة الصباحية؟', 'Why does a morning visit work well?'),
        body: l(
          'لأنها تمنحك مساحة أكبر للمشي ورؤية التفاصيل من دون ضغط ذروة المساء.',
          'Because it gives you more room to walk and see details without the pressure of the evening peak.'
        )
      },
      {
        title: l('ما شكل الفطور المناسب؟', 'What kind of breakfast works best?'),
        body: l(
          'الأفضل عادة خيار واضح وخفيف أو متوسط، يترك لك طاقة للمشي بعده بدل أن يثقل بقية الجولة.',
          'Usually a clear light or moderate option works best, leaving enough energy to continue walking afterwards.'
        ),
        bullets: [
          l('اجعل القهوة أو الشاي جزءًا من الخطة', 'Make coffee or tea part of the plan'),
          l('ابدأ بالفطور ثم المشي لا العكس إذا كنت مع أطفال', 'With children, breakfast first often works better than walking first'),
          l('استخدم الصباح للتصوير والمرور المريح', 'Use the morning for easier movement and photography')
        ]
      },
      {
        title: l('هل الفطور يغني عن الزيارة المسائية؟', 'Does breakfast replace an evening visit?'),
        body: l(
          'ليس بالضرورة؛ فهو يقدم نسخة مختلفة من السوق، أهدأ وأخف، لكنه لا يعوض أجواء المساء لمن يبحث عنها.',
          'Not necessarily; it offers a different version of the souk, calmer and lighter, but it does not replace the evening atmosphere if that is what you want.'
        )
      }
    ],
    verify: l(
      'إذا كانت الزيارة مرتبطة بموعد لاحق في اليوم، فاختر فطورًا سريعًا وواضحًا بدل التوقف الطويل الذي يضغط بقية البرنامج.',
      'If the visit is tied to a later appointment the same day, choose a quick clear breakfast rather than a long stop that squeezes the rest of the plan.'
    ),
    related: ['food/coffee-tea', 'visit/best-time', 'routes/90-minute-market-walk']
  },
  {
    slug: 'food/evening-dining',
    category: l('الطعام والمقاهي', 'Food and cafes'),
    title: l('العشاء والمساء في المباركية', 'Evening dining in Al-Mubarakiya'),
    seoTitle: l('العشاء والمساء في المباركية | الأجواء والطعام', 'Evening dining in Al-Mubarakiya | Atmosphere and food'),
    description: l(
      'صفحة تمهيدية عن العشاء في المباركية وأجواء المساء: متى تصل، وكيف توازن بين الأكل والمشي في أكثر أوقات السوق حيوية.',
      'An introductory page to evening dining in Al-Mubarakiya: when to arrive and how to balance food and walking during the liveliest part of the day.'
    ),
    hero: l(
      'المساء هو الوقت الذي تظهر فيه المباركية بأكثر صورها امتلاءً، ولهذا يحتاج العشاء فيه إلى تخطيط أبسط لكنه أوضح.',
      'Evening is when Al-Mubarakiya often appears at its fullest, which is why dinner there benefits from a plan that is simpler but more deliberate.'
    ),
    intro: l(
      'هذه الصفحة موجهة لمن يريد الجمع بين المشي الليلي والطعام من دون أن يضيع الوقت كله في الانتظار أو التنقل غير الواضح.',
      'This page is for visitors who want to combine a night walk and food without losing the whole evening to waiting or unclear movement.'
    ),
    highlights: [
      { label: l('الأجواء', 'Atmosphere'), value: l('الأكثر حيوية عادة', 'Usually the liveliest') },
      { label: l('الأفضل', 'Best approach'), value: l('حدد وقت الأكل مبكرًا', 'Set the meal window early') },
      { label: l('انتبه إلى', 'Watch for'), value: l('الانتظار والزحام', 'Waiting and crowds') }
    ],
    sections: [
      {
        title: l('لماذا يجذب المساء الزوار؟', 'Why do visitors gravitate toward the evening?'),
        body: l(
          'لأنه يجمع بين الإضاءة والحركة والطعام في صورة أقرب لما يتخيله كثير من الناس عن السوق القديم الحي.',
          'Because it combines lighting, movement and food in a way that feels close to what many people imagine a living old souk to be.'
        )
      },
      {
        title: l('كيف أوزع الوقت بين المشي والعشاء؟', 'How should I split time between walking and dinner?'),
        body: l(
          'إما أن تمشي أولًا ثم تتعشى، أو تجعل الطعام قلب الخطة وتخفف المشي بعدها. الجمع الكامل بين الاثنين يستهلك وقتًا أطول مما يبدو.',
          'Either walk first and dine afterwards, or make the meal the centre of the plan and keep the later walk lighter. Trying to do both fully often takes longer than it seems.'
        ),
        bullets: [
          l('احجز وقتًا إضافيًا للانتظار في الذروة', 'Allow extra time for waiting in peak periods'),
          l('اختر نقطة التقاء واضحة بعد العشاء', 'Choose a clear meeting or exit point after dinner'),
          l('لا تجعل بقية الجدول يعتمد على انتهاء العشاء بسرعة', 'Do not make the rest of the schedule depend on a fast dinner turnaround')
        ]
      },
      {
        title: l('متى لا يكون المساء الخيار الأفضل؟', 'When is evening not the best choice?'),
        body: l(
          'إذا كنت تريد هدوءًا أعلى، أو لديك أطفال صغار، أو تعتمد على برنامج صارم بزمن محدود.',
          'If you want more calm, are travelling with very young children, or depend on a tightly timed schedule.'
        )
      }
    ],
    verify: l(
      'قبل الخروج، راجع ازدحام الوقت الذي اخترته ووسيلة العودة، لأن المساء يرفع قيمة التخطيط اللوجستي أكثر من بقية الفترات.',
      'Before leaving, review the crowd level at your chosen time and your return transport, because evening raises the importance of logistics more than other periods.'
    ),
    related: ['food/restaurants', 'food/seafood-grills', 'routes/evening-food-walk']
  },
  {
    slug: 'nearby/grand-mosque',
    category: l('المعالم القريبة', 'Nearby landmarks'),
    title: l('المسجد الكبير قرب المباركية', 'The Grand Mosque near Al-Mubarakiya'),
    seoTitle: l('المسجد الكبير قرب المباركية | كيف تضيفه إلى الجولة', 'The Grand Mosque near Al-Mubarakiya | How to add it to your route'),
    description: l(
      'صفحة تمهيدية عن المسجد الكبير كأحد أهم المعالم القريبة من المباركية، وكيف يمكن دمجه مع جولة السوق باحترام وتخطيط جيد.',
      'An introductory page about the Grand Mosque as one of the most important landmarks near Al-Mubarakiya, and how it can be combined with a souk visit respectfully and with good planning.'
    ),
    hero: l(
      'إذا كنت تريد أن تمتد الجولة من التجارة إلى العمارة والدين والفضاء العام، فالمسجد الكبير من أوضح المحطات القريبة.',
      'If you want the route to expand from trade into architecture, religion and civic presence, the Grand Mosque is one of the clearest nearby stops.'
    ),
    intro: l(
      'هذه الصفحة ليست بديلًا عن معلومات الزيارة الرسمية، لكنها تساعدك على فهم متى يكون الجمع بين المكانين منطقيًا.',
      'This page is not a substitute for official visitor information, but it helps you judge when combining the two places makes sense.'
    ),
    highlights: [
      { label: l('القيمة', 'Value'), value: l('امتداد ثقافي وديني مهم', 'A major cultural and religious extension') },
      { label: l('الأفضل', 'Best use'), value: l('جزء من نصف يوم هادئ', 'Part of a calm half-day plan') },
      { label: l('مهم', 'Important'), value: l('احترام أوقات الصلاة وشروط الزيارة', 'Respect prayer times and visit rules') }
    ],
    sections: [
      {
        title: l('لماذا يضاف المسجد الكبير إلى جولة المباركية؟', 'Why add the Grand Mosque to an Al-Mubarakiya route?'),
        body: l(
          'لأنه يمنح الجولة بعدًا معماريًا وروحيًا وثقافيًا أوسع داخل قلب مدينة الكويت.',
          'Because it gives the route a broader architectural, spiritual and cultural layer within the heart of Kuwait City.'
        )
      },
      {
        title: l('متى يكون الدمج مناسبًا؟', 'When does the pairing work well?'),
        body: l(
          'عندما لا تكون الزيارة مستعجلة، وعندما تريد برنامجًا أهدأ من مجرد الأكل والتسوق داخل السوق نفسه.',
          'When the outing is not rushed and when you want something calmer than food and shopping alone inside the souk.'
        ),
        bullets: [
          l('راجع أوقات الصلاة والزيارة قبل الذهاب', 'Check prayer and visit timings before going'),
          l('التزم بالملابس والسلوك المناسبين', 'Follow appropriate dress and conduct'),
          l('لا تضغط الخطة إذا كان اليوم قصيرًا', 'Do not over-pack the plan if the day is short')
        ]
      },
      {
        title: l('ما الذي يضيفه للمشي؟', 'What does it add to the walk?'),
        body: l(
          'يضيف توازنًا بين السوق كفضاء تجاري وبين معلم ديني ومعماري مهم في مركز المدينة.',
          'It creates a balance between the souk as a commercial space and an important religious and architectural landmark in the city centre.'
        )
      }
    ],
    verify: l(
      'قبل الزيارة، اعتمد على المعلومات الرسمية للمسجد بخصوص الإتاحة والتوقيت واللباس، لأن هذه الصفحة تمهيدية فقط.',
      'Before visiting, rely on official mosque information for access, timing and dress requirements, because this page is introductory only.'
    ),
    related: ['heritage/safat-square', 'routes/half-day-heritage', 'nearby/kuwait-national-museum']
  },
  {
    slug: 'nearby/kuwait-national-museum',
    category: l('المعالم القريبة', 'Nearby landmarks'),
    title: l('متحف الكويت الوطني قرب المباركية', 'Kuwait National Museum near Al-Mubarakiya'),
    seoTitle: l('متحف الكويت الوطني قرب المباركية | جولة ثقافية أوسع', 'Kuwait National Museum near Al-Mubarakiya | A wider cultural outing'),
    description: l(
      'كيف يكمّل متحف الكويت الوطني زيارة المباركية؟ صفحة تمهيدية لدمج السوق مع تجربة متحفية وثقافية في اليوم نفسه.',
      'How does the Kuwait National Museum complement a visit to Al-Mubarakiya? An introductory page for combining the souk with a museum and cultural experience on the same day.'
    ),
    hero: l(
      'عندما تريد الانتقال من نبض السوق الحي إلى قراءة أهدأ لتاريخ الكويت وثقافتها، يصبح المتحف امتدادًا منطقيًا للجولة.',
      'When you want to move from the live pulse of the souk to a quieter reading of Kuwait’s history and culture, the museum becomes a natural extension.'
    ),
    intro: l(
      'هذه الصفحة مفيدة لمن يريد جعل زيارة المباركية جزءًا من نصف يوم ثقافي أو يوم مدينة أوسع.',
      'This page is useful for visitors who want to make Al-Mubarakiya part of a cultural half-day or a wider city day.'
    ),
    highlights: [
      { label: l('أفضل استخدام', 'Best use'), value: l('دمج السوق مع المتحف في يوم واحد', 'Combine the souk and museum in one day') },
      { label: l('الإيقاع', 'Pace'), value: l('أهدأ وأكثر تفسيرًا', 'Calmer and more interpretive') },
      { label: l('مهم', 'Important'), value: l('مراجعة ساعات الزيارة الرسمية', 'Review official opening hours') }
    ],
    sections: [
      {
        title: l('لماذا يفيد دمج المتحف مع السوق؟', 'Why is it useful to combine the museum with the souk?'),
        body: l(
          'لأن السوق يمنحك التجربة الحية، بينما يعطيك المتحف إطارًا أوسع لفهم التاريخ والثقافة التي تحيط بالمكان.',
          'Because the souk gives you the live experience, while the museum offers a wider framework for understanding the history and culture around it.'
        )
      },
      {
        title: l('كيف أوزع الطاقة والوقت؟', 'How should I split time and energy?'),
        body: l(
          'الأفضل عادة ألا تحاول زيارة السوق والمتحف بكامل العمق في اليوم نفسه؛ اختر تركيزًا أساسيًا ثم اجعل الآخر امتدادًا أقصر.',
          'It is usually better not to try to do both the souk and the museum in full depth on the same day; choose one as the main focus and keep the other shorter.'
        ),
        bullets: [
          l('ابدأ بما يهمك أكثر ثم أضف الثاني إذا بقي وقت', 'Start with what matters more, then add the second if time remains'),
          l('خفف التوقعات في الأيام الحارة أو الطويلة أصلًا', 'Moderate expectations on hot days or already long schedules'),
          l('راجع الوضع التشغيلي الرسمي قبل الحركة', 'Check official operating status before moving')
        ]
      },
      {
        title: l('ما الذي يضيفه المتحف للزائر؟', 'What does the museum add for visitors?'),
        body: l(
          'يضيف سياقًا منظمًا وقراءة أوسع للبلد، ما يجعل تجربة المباركية أقل عزلة وأكثر عمقًا.',
          'It adds structured context and a wider reading of the country, making the Al-Mubarakiya experience less isolated and more layered.'
        )
      }
    ],
    verify: l(
      'قبل اعتماد الخطة، راجع التوقيت الرسمي للمتحف ومدى ملاءمته ليومك، لأن الإتاحة قد تتغير.',
      'Before finalising the plan, review the museum’s official timing and whether it suits your day, because availability can change.'
    ),
    related: ['nearby/sadu-house', 'routes/half-day-heritage', 'nearby/grand-mosque']
  },
  {
    slug: 'nearby/sadu-house',
    category: l('المعالم القريبة', 'Nearby landmarks'),
    title: l('بيت السدو قرب المباركية', 'Sadu House near Al-Mubarakiya'),
    seoTitle: l('بيت السدو قرب المباركية | الحرف والنسيج والثقافة', 'Sadu House near Al-Mubarakiya | Craft, weaving and culture'),
    description: l(
      'صفحة تمهيدية عن بيت السدو كامتداد ثقافي لزيارة المباركية، خاصة لمن يهتم بالحرف والمنسوجات والهوية البدوية في الكويت.',
      'An introductory page on Sadu House as a cultural extension to an Al-Mubarakiya visit, especially for visitors interested in craft, textiles and Bedouin identity in Kuwait.'
    ),
    hero: l(
      'بيت السدو يوسّع زيارة السوق من عالم التجارة الحية إلى عالم الحرفة والتقنية والذاكرة النسيجية.',
      'Sadu House extends the market visit from the world of live trade into the world of craft, technique and textile memory.'
    ),
    intro: l(
      'هذه الصفحة مناسبة لمن وجد في السوق جانب المنسوجات والحرف جذابًا ويريد خطوة ثقافية مكمّلة لذلك.',
      'This page suits visitors who found the souk’s textile and craft dimension appealing and want a cultural next step.'
    ),
    highlights: [
      { label: l('القيمة', 'Value'), value: l('حرفة وهوية ونسيج', 'Craft, identity and textile culture') },
      { label: l('أفضل استخدام', 'Best use'), value: l('إضافة هادئة بعد السوق', 'A calm addition after the souk') },
      { label: l('الأنسب لـ', 'Best for'), value: l('من يهتم بالتراث والحرف', 'Visitors interested in heritage and craft') }
    ],
    sections: [
      {
        title: l('لماذا يكمّل بيت السدو السوق؟', 'Why does Sadu House complement the souk?'),
        body: l(
          'لأنه يأخذ بعض الخيوط التي تراها في السوق، مثل المنسوجات والهوية المحلية، ويمنحها إطارًا ثقافيًا أوضح.',
          'Because it takes some of the threads visible in the souk, such as textiles and local identity, and gives them a clearer cultural frame.'
        )
      },
      {
        title: l('متى يكون مناسبًا إضافته إلى البرنامج؟', 'When is it a good addition to the plan?'),
        body: l(
          'عندما تريد يومًا أقل صخبًا، أو عندما يكون اهتمامك بالحرفة والثقافة أكبر من اهتمامك بالتسوق وحده.',
          'When you want a quieter day, or when your interest in craft and culture is stronger than your interest in shopping alone.'
        ),
        bullets: [
          l('اجمعه مع مسار الثقافة لا مع يوم تسوق مكثف', 'Pair it with a cultural route, not an intense shopping day'),
          l('اترك وقتًا للانتقال والاستراحة', 'Leave time for transfer and rest'),
          l('راجع المعلومات الرسمية قبل الذهاب', 'Check official information before going')
        ]
      },
      {
        title: l('ما الذي يضيفه للزائر؟', 'What does it add for visitors?'),
        body: l(
          'يضيف فهمًا أعمق للمواد والحرف التي تشكّل جزءًا من الذاكرة الكويتية خارج السوق نفسه.',
          'It adds a deeper understanding of materials and crafts that form part of Kuwaiti memory beyond the market itself.'
        )
      }
    ],
    verify: l(
      'تعتمد تفاصيل الزيارة والإتاحة على الجهة المشغلة، لذلك استخدم هذه الصفحة كخريطة معنى لا كبديل عن المعلومات الرسمية.',
      'Visit details and access depend on the operator, so use this page as a map of meaning rather than a substitute for official information.'
    ),
    related: ['nearby/kuwait-national-museum', 'shopping/bisht-textiles', 'routes/half-day-heritage']
  },
  {
    slug: 'nearby/seif-palace',
    category: l('المعالم القريبة', 'Nearby landmarks'),
    title: l('قصر السيف ومحيطه قرب المباركية', 'Seif Palace and its surroundings near Al-Mubarakiya'),
    seoTitle: l('قصر السيف قرب المباركية | ماذا يرى الزائر؟', 'Seif Palace near Al-Mubarakiya | What can visitors realistically see?'),
    description: l(
      'صفحة توضيحية عن قصر السيف كعنصر بصري وتاريخي في وسط مدينة الكويت، مع تركيز على المشاهدة من الأماكن العامة لا على افتراض الدخول.',
      'A clarifying page on Seif Palace as a visual and historic element in central Kuwait City, with emphasis on viewing from public areas rather than assuming access.'
    ),
    hero: l(
      'قصر السيف يضيف إلى جولة المباركية بُعدًا سياسيًا ومعماريًا، لكن أهم ما يحتاجه الزائر هنا هو وضوح التوقعات.',
      'Seif Palace adds a political and architectural dimension to an Al-Mubarakiya route, but what visitors need most here is clarity of expectation.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على إدراج القصر ضمن المشي أو المشاهدة الخارجية من دون تضخيم ما يمكن فعله فعليًا في المكان.',
      'This page helps you place the palace within a walking or external-view plan without overstating what can realistically be done there.'
    ),
    highlights: [
      { label: l('الأفضل', 'Best use'), value: l('مشاهدة خارجية ضمن المسار', 'External viewing within a route') },
      { label: l('القيمة', 'Value'), value: l('بعد معماري وسياسي', 'Architectural and political context') },
      { label: l('مهم', 'Important'), value: l('عدم افتراض حرية الدخول', 'Do not assume public access') }
    ],
    sections: [
      {
        title: l('لماذا يضاف القصر إلى جولة السوق؟', 'Why add the palace to a souk route?'),
        body: l(
          'لأنه يربط بين قلب التجارة التاريخية وبين رموز الدولة والسلطة والعمران في المدينة.',
          'Because it connects the historic commercial heart with symbols of state, authority and urban form in the city.'
        )
      },
      {
        title: l('كيف ينبغي أن أتعامل معه؟', 'How should I approach it?'),
        body: l(
          'كمعلم يُقرأ من محيطه ومن الأماكن العامة المسموح بها، لا كوجهة دخول حر أو تجربة داخلية مضمونة.',
          'As a landmark read from its surroundings and permitted public viewpoints, not as a guaranteed interior destination.'
        ),
        bullets: [
          l('ادمجه مع جولة المشي الخارجية', 'Fold it into an external walking route'),
          l('لا تبنِ اليوم كله على هذا المعلم وحده', 'Do not build the whole day around this landmark alone'),
          l('احترم حدود المشاهدة والوصول', 'Respect access and viewing boundaries')
        ]
      },
      {
        title: l('ما الذي يضيفه للزائر؟', 'What does it add for visitors?'),
        body: l(
          'يضيف قراءة أوسع لمركز المدينة، حيث تتجاور التجارة والسلطة والذاكرة العمرانية في مساحة واحدة.',
          'It adds a wider reading of the city centre, where trade, authority and urban memory sit close together.'
        )
      }
    ],
    verify: l(
      'استخدم هذه الصفحة لفهم الدور والمشهد، ثم راجع ما إذا كانت المشاهدة الخارجية تناسب يومك ومسارك الفعلي.',
      'Use this page to understand the role and visual presence of the palace, then decide whether an external view suits your actual day and route.'
    ),
    related: ['nearby/grand-mosque', 'routes/kuwait-city-one-day', 'heritage/safat-square']
  },
  {
    slug: 'routes/half-day-heritage',
    category: l('المسارات والخطط', 'Routes and itineraries'),
    title: l('مسار نصف يوم ثقافي حول المباركية', 'A half-day heritage route around Al-Mubarakiya'),
    seoTitle: l('مسار نصف يوم ثقافي حول المباركية', 'A half-day heritage route around Al-Mubarakiya'),
    description: l(
      'خطة تمهيدية لنصف يوم يربط سوق المباركية بالتاريخ والمعالم القريبة، من دون أن يتحول البرنامج إلى سباق بين محطات كثيرة.',
      'An introductory half-day plan linking Al-Mubarakiya with nearby heritage landmarks, without turning the outing into a race between too many stops.'
    ),
    hero: l(
      'إذا كان هدفك قراءة أعمق للمكان، فنصف اليوم يمنحك توازنًا جيدًا بين السوق والمحيط التاريخي.',
      'If your goal is a deeper reading of place, half a day offers a strong balance between the souk and the surrounding heritage context.'
    ),
    intro: l(
      'هذا المسار موجه لمن يريد أكثر من زيارة سريعة، لكن من دون الالتزام بيوم كامل مزدحم بالتفاصيل.',
      'This route is for visitors who want more than a quick stop, but without committing to an overloaded full-day schedule.'
    ),
    highlights: [
      { label: l('المدة', 'Duration'), value: l('نحو 3–4 ساعات', 'About 3–4 hours') },
      { label: l('التركيز', 'Focus'), value: l('السوق + معلمان أو ثلاثة بحد أقصى', 'Souk plus two or three heritage stops at most') },
      { label: l('الأفضل لـ', 'Best for'), value: l('الزوار الثقافيين', 'Culture-focused visitors') }
    ],
    sections: [
      {
        title: l('كيف نبني نصف اليوم؟', 'How should the half-day be built?'),
        body: l(
          'ابدأ بالمباركية كمحور حي، ثم أضف محطة أو اثنتين تعطيان السياق التاريخي أو المعماري الأوسع.',
          'Start with Al-Mubarakiya as the living core, then add one or two stops that provide the wider historical or architectural context.'
        )
      },
      {
        title: l('ما الذي لا ينبغي فعله؟', 'What should you avoid?'),
        body: l(
          'لا تحاول ضم كل معلم قريب في نصف يوم واحد؛ الجودة هنا أهم من عدد التوقفات.',
          'Do not try to include every nearby landmark in a single half-day; quality matters more than stop count.'
        ),
        bullets: [
          l('اختر محورًا واضحًا: سوق ثم مسجد أو متحف أو ساحة', 'Choose a clear axis: souk, then mosque or museum or square'),
          l('اترك مساحة للطعام أو الراحة', 'Leave space for food or a break'),
          l('خفف الانتقالات غير الضرورية', 'Reduce unnecessary transfers')
        ]
      },
      {
        title: l('من يناسبه هذا المسار؟', 'Who is this route best for?'),
        body: l(
          'من يحب المشي الثقافي المتوازن، ويريد أن يرى السوق في سياق أوسع لا كمشهد منفرد.',
          'Anyone who likes balanced cultural walking and wants to see the souk in a wider context rather than as an isolated scene.'
        )
      }
    ],
    verify: l(
      'ثبّت محطتين أساسيتين فقط في البداية، ثم أضف الثالثة إذا كان الوقت والطاقة يسمحان فعلًا.',
      'Lock in only two essential stops at first, then add a third only if time and energy genuinely allow.'
    ),
    related: ['heritage/history', 'nearby/grand-mosque', 'nearby/kuwait-national-museum']
  },
  {
    slug: 'routes/evening-food-walk',
    category: l('المسارات والخطط', 'Routes and itineraries'),
    title: l('مسار مسائي للطعام في المباركية', 'An evening food walk in Al-Mubarakiya'),
    seoTitle: l('مسار مسائي للطعام في المباركية | جولة أكل ومشي', 'An evening food walk in Al-Mubarakiya | Food and walking route'),
    description: l(
      'خطة تمهيدية لجولة مسائية في المباركية تجمع بين المشي الخفيف والطعام أو القهوة ضمن إيقاع مناسب للمساء.',
      'An introductory plan for an evening route in Al-Mubarakiya that combines light walking with food or coffee at a pace suited to the night atmosphere.'
    ),
    hero: l(
      'المساء هو الوقت الذي يجمع فيه السوق بين الحركة والجوع والرغبة في التمشية، لذلك يحتاج إلى خطة بسيطة وواضحة.',
      'Evening is when the souk combines movement, appetite and the urge to wander, so it benefits from a plan that stays simple and clear.'
    ),
    intro: l(
      'هذا المسار لا يحاول أن يجعلك ترى كل شيء، بل يربط بين الطعام والأجواء في خط واحد مريح.',
      'This route does not try to make you see everything; it links food and atmosphere in one comfortable line.'
    ),
    highlights: [
      { label: l('المدة', 'Duration'), value: l('نحو 2–3 ساعات', 'About 2–3 hours') },
      { label: l('التركيز', 'Focus'), value: l('مشي + وجبة أو قهوة', 'Walking plus a meal or coffee') },
      { label: l('مهم', 'Important'), value: l('تجنب حشر محطات كثيرة', 'Avoid packing in too many stops') }
    ],
    sections: [
      {
        title: l('كيف أبدأ المسار؟', 'How should the route begin?'),
        body: l(
          'ابدأ بمرور قصير يلتقط الأجواء، ثم اتخذ قرار الطعام أو القهوة، وبعدها أكمل المشي الخفيف أو اختم الزيارة.',
          'Start with a short atmospheric walk, then make the food or coffee stop, and continue with a lighter walk afterwards or finish the visit there.'
        )
      },
      {
        title: l('ما الذي يجعل المسار ناجحًا؟', 'What makes this route work well?'),
        body: l(
          'أن يكون عدد القرارات قليلًا: نقطة وصول واضحة، نوع وجبة أو شراب واضح، وخروج سهل في النهاية.',
          'A small number of decisions: a clear arrival point, a clear choice of meal or drink, and an easy exit at the end.'
        ),
        bullets: [
          l('لا تؤجل اختيار الأكل حتى تتعب المجموعة', 'Do not wait until the group is already tired before choosing food'),
          l('اجعل القهوة خيارًا بديلًا إذا طال الانتظار', 'Use coffee as a fallback if meal waiting becomes long'),
          l('حدّد نقطة الخروج قبل التعمق في الممرات', 'Set the exit point before going deep into the lanes')
        ]
      },
      {
        title: l('من يناسبه هذا المسار؟', 'Who is this route best for?'),
        body: l(
          'الزوار الذين يريدون تذوق السوق في أكثر أوقاته حيوية من دون تحويل الأمسية إلى خطة متعبة.',
          'Visitors who want to taste the souk at its liveliest without turning the evening into an exhausting programme.'
        )
      }
    ],
    verify: l(
      'إذا كان المساء مزدحمًا جدًا، فخفف الجولة واختر محطة أكل أو قهوة واحدة فقط بدل محاولة كل شيء معًا.',
      'If the evening turns very busy, simplify the route and choose only one meal or coffee stop instead of trying to do everything together.'
    ),
    related: ['food/evening-dining', 'food/coffee-tea', 'visit/best-time']
  },
  {
    slug: 'routes/family-friendly',
    category: l('المسارات والخطط', 'Routes and itineraries'),
    title: l('مسار عائلي مناسب في المباركية', 'A family-friendly route in Al-Mubarakiya'),
    seoTitle: l('مسار عائلي مناسب في المباركية | مشي أخف واستراحات أوضح', 'A family-friendly route in Al-Mubarakiya | Lighter walking and clearer breaks'),
    description: l(
      'خطة تمهيدية لجولة عائلية في المباركية تراعي قصر المسافة ووضوح التوقفات والمرونة مع الأطفال وكبار السن.',
      'An introductory plan for a family-friendly route in Al-Mubarakiya that keeps walking manageable, stops clear and the pace flexible for children and older relatives.'
    ),
    hero: l(
      'المسار العائلي الجيد لا يطارد كثرة المحطات؛ هو ببساطة يحافظ على راحة المجموعة ووضوح الاتجاه.',
      'A good family route does not chase stop count; it simply protects group comfort and keeps direction clear.'
    ),
    intro: l(
      'هذه الصفحة تبني الزيارة على مسافة أقصر وقرارات أقل، حتى يبقى السوق ممتعًا لكل أفراد المجموعة.',
      'This page builds the outing around a shorter distance and fewer decisions, so the souk stays enjoyable for the whole group.'
    ),
    highlights: [
      { label: l('المدة', 'Duration'), value: l('نحو 1.5–2.5 ساعة', 'About 1.5–2.5 hours') },
      { label: l('الأولوية', 'Priority'), value: l('الراحة والمرونة', 'Comfort and flexibility') },
      { label: l('الأفضل', 'Best timing'), value: l('قبل الذروة أو في طقس ألطف', 'Before the peak or in gentler weather') }
    ],
    sections: [
      {
        title: l('كيف نرتب الجولة العائلية؟', 'How should the family route be arranged?'),
        body: l(
          'ابدأ بمحطة واضحة سهلة الوصول، ثم أضف مشيًا قصيرًا، ثم استراحة أو طعامًا خفيفًا، وبعدها قرر إن كانت المجموعة تريد المزيد.',
          'Start from a clear easy-access point, add a short walk, then a break or light food stop, and only then decide whether the group wants more.'
        )
      },
      {
        title: l('ما الذي يرهق العائلة غالبًا؟', 'What usually makes family visits tiring?'),
        body: l(
          'الانتظار الطويل، وكثرة الالتفاف، والتأخر في تحديد وقت الراحة أو الطعام.',
          'Long waiting, too much wandering, and delaying the rest or food stop for too long.'
        ),
        bullets: [
          l('اجعل نقطة الراحة مبكرة نسبيًا', 'Schedule the first break relatively early'),
          l('خفف عدد القرارات داخل السوق', 'Reduce decision count inside the souk'),
          l('ابقَ قريبًا من نقطة خروج مفهومة', 'Stay relatively close to a clear exit point')
        ]
      },
      {
        title: l('من يناسبه هذا المسار؟', 'Who is this route for?'),
        body: l(
          'العائلات، والمجموعات المختلطة في القدرة على المشي، وكل من يفضّل جولة واضحة غير مرهقة.',
          'Families, mixed-ability groups, and anyone who prefers a clear route that does not overwork the group.'
        )
      }
    ],
    verify: l(
      'إذا ارتفعت الحرارة أو طال الانتظار، فاختصر المسار مباشرة؛ نجاح الجولة العائلية يقاس بالراحة لا بعدد النقاط التي غطيتها.',
      'If the heat rises or waiting gets long, shorten the route immediately; the success of a family outing is measured by comfort, not by how many points you covered.'
    ),
    related: ['visit/with-kids', 'visit/accessibility', 'food/breakfast']
  },
  {
    slug: 'routes/summer-heat',
    category: l('المسارات والخطط', 'Routes and itineraries'),
    title: l('مسار المباركية في الحر والصيف', 'A hot-weather route for Al-Mubarakiya'),
    seoTitle: l('مسار المباركية في الحر والصيف | زيارة أقصر وأهدأ', 'A hot-weather route for Al-Mubarakiya | A shorter calmer visit'),
    description: l(
      'كيف تزور المباركية في الصيف أو الحر المرتفع؟ صفحة عملية لبناء مسار أقصر مع استراحات أوضح ووقت أنسب.',
      'How should you visit Al-Mubarakiya in summer or high heat? A practical page for building a shorter route with clearer breaks and a better time window.'
    ),
    hero: l(
      'في الحر، أفضل خطة ليست الأكثر طموحًا؛ بل الأكثر ذكاءً في تقليل المسافة ورفع الراحة.',
      'In hot weather, the best plan is not the most ambitious one; it is the smartest one in reducing distance and increasing comfort.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على تحويل الزيارة من اختبار تحمل إلى جولة قصيرة مدروسة تناسب الطقس.',
      'This page helps turn the visit from a test of endurance into a shorter more thoughtful route suited to the weather.'
    ),
    highlights: [
      { label: l('الأفضل', 'Best timing'), value: l('بعد انخفاض الحرارة', 'After the heat begins to drop') },
      { label: l('الأولوية', 'Priority'), value: l('تقليل المسافة ورفع الراحة', 'Reduce distance and increase comfort') },
      { label: l('مهم', 'Important'), value: l('ماء وخروج سهل', 'Water and an easy exit') }
    ],
    sections: [
      {
        title: l('كيف يتغير المسار في الصيف؟', 'How does the route change in summer?'),
        body: l(
          'يصبح أقصر، وأكثر تركيزًا، وأقل رغبة في تغطية كل شيء. الهدف هو جودة التجربة لا كثرة المحطات.',
          'It becomes shorter, more focused, and less concerned with covering everything. The aim is the quality of the experience rather than stop count.'
        )
      },
      {
        title: l('ما الذي يجب تقليله؟', 'What should be reduced?'),
        body: l(
          'المشي الطويل غير الضروري، والالتفافات، والانتظار الطويل قبل الطعام أو الشراب أو العودة.',
          'Long unnecessary walking, detours, and extended waiting before food, drink or the return.'
        ),
        bullets: [
          l('اختر محطة رئيسية واحدة أو اثنتين فقط', 'Choose only one or two main stops'),
          l('ادمج الراحة ضمن الخطة لا كحل طارئ فقط', 'Build rest into the plan, not only as an emergency response'),
          l('خفف المشتريات الثقيلة أو المتأخرة', 'Reduce heavy or late purchases')
        ]
      },
      {
        title: l('ما الذي يبقي التجربة ممتعة رغم الحر؟', 'What keeps the visit enjoyable despite the heat?'),
        body: l(
          'اختيار وقت ألطف، ومسار أوضح، ونهاية سهلة من دون ضغط لإكمال كل فكرة في يوم واحد.',
          'A gentler time window, a clearer route and an easy finish without pressure to complete every idea in one day.'
        )
      }
    ],
    verify: l(
      'إذا بدا الحر أعلى من المتوقع، فاختر نسخة مختصرة جدًا من الزيارة بدل الإصرار على المسار الكامل.',
      'If the heat feels stronger than expected, choose a very shortened version of the visit rather than insisting on the full route.'
    ),
    related: ['visit/best-time', 'visit/how-long', 'routes/evening-food-walk']
  },
  {
    slug: 'routes/kuwait-city-one-day',
    category: l('المسارات والخطط', 'Routes and itineraries'),
    title: l('يوم واحد في مدينة الكويت يبدأ من المباركية', 'One day in Kuwait City starting from Al-Mubarakiya'),
    seoTitle: l('يوم واحد في مدينة الكويت يبدأ من المباركية', 'One day in Kuwait City starting from Al-Mubarakiya'),
    description: l(
      'خطة تمهيدية ليوم واحد في مدينة الكويت تجعل المباركية نقطة البداية، ثم تبني حولها برنامجًا متوازنًا من الطعام والثقافة والمعالم القريبة.',
      'An introductory one-day plan in Kuwait City that uses Al-Mubarakiya as the starting point, then builds a balanced programme of food, culture and nearby landmarks around it.'
    ),
    hero: l(
      'إذا كان لديك يوم واحد فقط، فالمباركية تصلح نقطة انطلاق ممتازة لأنها تجمع بين الوصول والطعام والهوية والتاريخ.',
      'If you have only one day, Al-Mubarakiya can be an excellent starting point because it combines access, food, identity and history.'
    ),
    intro: l(
      'هذه الصفحة تساعدك على بناء يوم متوازن بدل مطاردة أكبر عدد ممكن من المعالم بلا ترابط.',
      'This page helps you build a balanced day instead of chasing the highest number of landmarks without coherence.'
    ),
    highlights: [
      { label: l('المدة', 'Duration'), value: l('يوم مدينة متوازن', 'A balanced city day') },
      { label: l('المحور', 'Core'), value: l('المباركية أولًا ثم التوسّع', 'Start with Al-Mubarakiya, then expand outward') },
      { label: l('الأفضل لـ', 'Best for'), value: l('الزوار لأول مرة', 'First-time city visitors') }
    ],
    sections: [
      {
        title: l('لماذا تبدأ من المباركية؟', 'Why start from Al-Mubarakiya?'),
        body: l(
          'لأنها تعطيك مدخلًا سريعًا ومكثفًا إلى روح المدينة قبل أن تنتقل إلى المعالم الدينية أو الثقافية أو الحكومية القريبة.',
          'Because it gives you a quick concentrated entry into the spirit of the city before you move on to nearby religious, cultural or civic landmarks.'
        )
      },
      {
        title: l('كيف لا يزدحم اليوم أكثر من اللازم؟', 'How do you stop the day from becoming overloaded?'),
        body: l(
          'اختر السوق كمحور ثابت، ثم أضف معلمين أو ثلاثة بحد أقصى بحسب الطاقة والزمن والطقس.',
          'Keep the souk as the fixed core, then add only two or three landmarks at most depending on energy, time and weather.'
        ),
        bullets: [
          l('ابدأ بالمكان الأقرب إلى اهتمامك الرئيسي', 'Start with the place closest to your main interest'),
          l('اترك وجبة أو قهوة ضمن الخطة لا على هامشها', 'Place a meal or coffee within the plan, not at its margins'),
          l('اجعل نهاية اليوم سهلة من ناحية العودة', 'Make the end of the day easy from a return-transport standpoint')
        ]
      },
      {
        title: l('من يناسبه هذا اليوم؟', 'Who is this one-day plan for?'),
        body: l(
          'من يزور مدينة الكويت لأول مرة ويريد صورة أولى متوازنة بين السوق والمعالم القريبة والهوية الحضرية.',
          'Visitors coming to Kuwait City for the first time who want a balanced first picture of the souk, nearby landmarks and the city’s urban identity.'
        )
      }
    ],
    verify: l(
      'حافظ على مرونة اليوم: إذا طالت محطة واحدة أو اشتد الحر، فاحذف معلمًا بدل الضغط على البرنامج كله.',
      'Keep the day flexible: if one stop runs long or the heat rises, remove a landmark rather than forcing the entire programme.'
    ),
    related: ['routes/half-day-heritage', 'nearby/grand-mosque', 'nearby/seif-palace']
  }
];

export function getGuidePage(slug: string): GuidePage | undefined {
  return GUIDE_PAGES.find((guide) => guide.slug === slug);
}

export function getGuideHref(slug: string, lang: Lang): string {
  return lang === 'en' ? `/en/${slug}/` : `/${slug}/`;
}

export function localize(text: LocalizedText, lang: Lang): string {
  return text[lang];
}
