import { ATTRACTION } from './site';

type LocalizedText = {
  ar: string;
  en: string;
};

export type GuideFaq = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type GuideFact = {
  label: LocalizedText;
  value: LocalizedText;
};

const l = (ar: string, en: string): LocalizedText => ({ ar, en });

const defaultFacts: Record<string, GuideFact[]> = {
  visit: [
    { label: l('الموقع', 'Location'), value: l('مدينة الكويت، شارع سوق الغربللي', 'Kuwait City, Gharabally Souq Street') },
    { label: l('مرجع عام', 'General listing'), value: l('08:00–22:00 يوميًا', '08:00–22:00 daily') },
    { label: l('آخر مراجعة', 'Last checked'), value: l('2 نوفمبر 2026', '2 November 2026') }
  ],
  heritage: [
    { label: l('نوع الصفحة', 'Page type'), value: l('قراءة تاريخية وتمهيدية', 'Historical and interpretive guide') },
    { label: l('نطاق القراءة', 'Scope'), value: l('السوق ومحيطه التاريخي', 'The souk and its historic setting') },
    { label: l('المرجع', 'Reference basis'), value: l('مصادر أكاديمية ورسمية', 'Academic and official sources') }
  ],
  shopping: [
    { label: l('نوع الصفحة', 'Page type'), value: l('دليل شراء محايد', 'Neutral buying guide') },
    { label: l('الأولوية', 'Priority'), value: l('المقارنة والاختيار الهادئ', 'Comparison and calm selection') },
    { label: l('تنبيه', 'Important note'), value: l('اسأل عن السعر وطريقة الدفع مباشرة', 'Ask directly about pricing and payment') }
  ],
  food: [
    { label: l('نوع الصفحة', 'Page type'), value: l('دليل طعام غير دعائي', 'Non-promotional food guide') },
    { label: l('الأفضل', 'Best use'), value: l('ربط الطعام بإيقاع الجولة', 'Match food to the rhythm of the visit') },
    { label: l('تنبيه', 'Important note'), value: l('القائمة والانتظار يحددان في الموقع', 'Menus and waiting are decided on site') }
  ],
  nearby: [
    { label: l('نوع الصفحة', 'Page type'), value: l('معلم قريب يكمل زيارة السوق', 'Nearby landmark that complements the souk') },
    { label: l('أفضل استخدام', 'Best use'), value: l('جزء من نصف يوم أو يوم مدينة', 'Part of a half-day or city-day route') },
    { label: l('تنبيه', 'Important note'), value: l('راجع الجهة الرسمية قبل الزيارة', 'Check official venue information before visiting') }
  ],
  routes: [
    { label: l('نوع الصفحة', 'Page type'), value: l('خطة مسار مرنة', 'Flexible route plan') },
    { label: l('الأولوية', 'Priority'), value: l('تقليل القرارات أثناء الزيارة', 'Reduce decisions on the day') },
    { label: l('أفضل استخدام', 'Best use'), value: l('تثبيت المحطات الأساسية فقط', 'Lock in only the essential stops') }
  ]
};

const defaultFaqs: Record<string, GuideFaq[]> = {
  visit: [
    {
      question: l('هل هذه الصفحة تؤكد التشغيل الفعلي لكل خدمة؟', 'Does this page confirm live operating status for every service?'),
      answer: l(
        'لا. هذه الصفحة تساعد على التخطيط العملي، لكن أي خدمة فردية مهمة مثل مطعم أو موقف أو متجر يجب التحقق منها مباشرة في يوم الزيارة.',
        'No. This page supports practical planning, but any critical individual service such as a restaurant, parking facility or store should still be checked directly on the day.'
      )
    },
    {
      question: l('هل تصلح الزيارة لأول مرة؟', 'Is this useful for a first-time visit?'),
      answer: l(
        'نعم، لأن صفحات الزيارة صممت لتقليل التردد قبل الانطلاق: متى تذهب، كيف تصل، وما الذي يحتاج قرارًا مبكرًا.',
        'Yes. The visit pages are designed to reduce hesitation before leaving: when to go, how to arrive and which decisions should be made early.'
      )
    },
    {
      question: l('ما أهم شيء أراجعه قبل الخروج؟', 'What is the most important thing to review before leaving?'),
      answer: l(
        'ثبّت وقت الزيارة وطريقة الوصول أولًا، ثم راجع فقط الخدمة التي لا يمكنك الاستغناء عنها أثناء الجولة.',
        'First lock in the timing and transport plan, then review the one service you cannot do without during the outing.'
      )
    }
  ],
  heritage: [
    {
      question: l('هل هذه الصفحة تاريخية أم عملية؟', 'Is this page historical or practical?'),
      answer: l(
        'هي صفحة تفسيرية تاريخية تساعدك على فهم المعنى والسياق، وتحتاج المعلومات التشغيلية الحديثة فيها إلى تحقق منفصل إذا أضيفت لاحقًا.',
        'It is an interpretive historical page that helps you understand meaning and context; any live operational details would still require separate verification if added later.'
      )
    },
    {
      question: l('هل أحتاج وقتًا طويلًا للاستفادة منها؟', 'Do I need a long visit to benefit from this page?'),
      answer: l(
        'ليس بالضرورة. حتى الزيارة القصيرة تصبح أعمق حين تعرف كيف تقرأ السوق والمعلم ضمن سياق أوسع.',
        'Not necessarily. Even a short visit becomes richer when you know how to read the souk and a landmark within a wider context.'
      )
    },
    {
      question: l('كيف أربط هذه الصفحة بالزيارة الفعلية؟', 'How should I connect this page to the actual visit?'),
      answer: l(
        'استخدمها مع مسار ثقافي أو معلم قريب، حتى تتحول المعلومة التاريخية إلى طريقة للمشي لا إلى فقرة منفصلة فقط.',
        'Use it with a heritage route or a nearby landmark page so the historical insight becomes a way of walking rather than just a standalone paragraph.'
      )
    }
  ],
  shopping: [
    {
      question: l('هل هذه الصفحة توصي ببائع محدد؟', 'Does this page recommend a specific seller?'),
      answer: l(
        'لا. هي تساعدك على اتخاذ قرار شراء واعٍ ومحايد، لا على توجيهك إلى متجر واحد بعينه.',
        'No. It helps you make a more aware and neutral buying decision rather than directing you to one named shop.'
      )
    },
    {
      question: l('هل الأسعار أوفر من مكان لآخر؟', 'Do prices vary from place to place?'),
      answer: l(
        'قد تختلف الأسعار والتجربة من محل إلى آخر، لذلك تشجع هذه الصفحات على المقارنة والسؤال الواضح قبل الالتزام.',
        'Prices and the buying experience can vary from one place to another, which is why these pages encourage comparison and clear questions before committing.'
      )
    },
    {
      question: l('متى أشتري أثناء الجولة؟', 'When should I buy during the visit?'),
      answer: l(
        'غالبًا بعد أن تفهم المنطقة أو تكمل الجزء الأساسي من المشي، حتى لا تتحول الأكياس أو القرارات إلى عبء مبكر.',
        'Usually after you understand the area or finish the main walking segment, so bags and buying decisions do not become an early burden.'
      )
    }
  ],
  food: [
    {
      question: l('هل هذه الصفحة قائمة مطاعم؟', 'Is this page a restaurant list?'),
      answer: l(
        'لا. هي دليل يساعدك على اختيار نوع التجربة الغذائية والوقت الأنسب لها داخل المباركية.',
        'No. It is a guide that helps you choose the type of food experience and the timing that fits best inside Al-Mubarakiya.'
      )
    },
    {
      question: l('هل أقرر الأكل قبل الوصول أم بعده؟', 'Should I decide on food before arriving or after?'),
      answer: l(
        'إذا كانت الوجبة جزءًا أساسيًا من اليوم، فالأفضل تحديد نوعها ونافذتها الزمنية قبل الوصول، مع ترك المرونة لاختيار المكان فعليًا في الموقع.',
        'If the meal is an important part of the day, it is better to decide on the type and time window before arrival while leaving some flexibility for the exact place on site.'
      )
    },
    {
      question: l('ما الذي أتحقق منه قبل الجلوس؟', 'What should I check before sitting down?'),
      answer: l(
        'الانتظار، وطريقة الجلوس، ووسائل الدفع، وما إذا كانت الوجبة ستضغط بقية خطتك أم تنسجم معها.',
        'Check waiting time, seating style, payment options and whether the meal will crowd out the rest of your plan or fit naturally into it.'
      )
    }
  ],
  nearby: [
    {
      question: l('هل تصلح هذه الصفحة كبديل للموقع الرسمي؟', 'Does this page replace the official venue information?'),
      answer: l(
        'لا. هي تساعد على ترتيب اليوم وفهم سبب إضافة المعلم إلى الجولة، لكن الشروط الرسمية والإتاحة الفعلية يجب مراجعتها مباشرة.',
        'No. It helps you understand why the landmark belongs in the day plan, but official rules and live availability should still be checked directly.'
      )
    },
    {
      question: l('متى أضيف معلمًا قريبًا إلى برنامج السوق؟', 'When should I add a nearby landmark to the souk plan?'),
      answer: l(
        'عندما يكون لديك وقت وهدوء كافيان، وعندما يكون الهدف يومًا ثقافيًا أو مدينيًا أوسع لا زيارة سوق سريعة فقط.',
        'When you have enough time and a calmer pace, and when the goal is a wider cultural or city day rather than only a quick souk visit.'
      )
    },
    {
      question: l('ما الخطأ الأكثر شيوعًا هنا؟', 'What is the most common mistake here?'),
      answer: l(
        'إضافة معالم كثيرة متباعدة أو مختلفة الإيقاع من دون حذف شيء آخر من الخطة.',
        'Adding too many landmarks with different pacing without removing something else from the day.'
      )
    }
  ],
  routes: [
    {
      question: l('هل يجب تنفيذ المسار حرفيًا؟', 'Should the route be followed literally?'),
      answer: l(
        'لا. هذه المسارات صممت كإطار عملي مرن، ويمكن اختصارها أو تخفيفها بحسب الطقس والزحام وطاقة المجموعة.',
        'No. These routes are built as flexible practical frameworks and can be shortened or softened according to weather, crowds and the energy of your group.'
      )
    },
    {
      question: l('كيف أختار المسار المناسب؟', 'How should I choose the right route?'),
      answer: l(
        'اختره بناءً على المدة المتاحة وهدف اليوم: طعام، تاريخ، عائلة، أو زيارة مختصرة وسريعة.',
        'Choose it according to the time you have and the purpose of the day: food, heritage, family time or a shorter quick visit.'
      )
    },
    {
      question: l('ما الذي ألغيه أولًا إذا طال اليوم؟', 'What should I drop first if the day runs long?'),
      answer: l(
        'ألغِ المحطة الأقل ارتباطًا بهدفك الأساسي، وابقِ السوق وما يدعمه فقط.',
        'Drop the stop that matters least to your main objective and keep only the souk and the pages that directly support it.'
      )
    }
  ]
};

const specificFacts: Record<string, GuideFact[]> = {
  'visit/opening-hours': [
    { label: l('ساعات مرجعية', 'Reference hours'), value: l('08:00–22:00 يوميًا', '08:00–22:00 daily') },
    { label: l('التقييم', 'Rating'), value: l(`${ATTRACTION.ratingValue} / 5 (${Number(ATTRACTION.ratingCount).toLocaleString('en-US')})`, `${ATTRACTION.ratingValue} / 5 (${Number(ATTRACTION.ratingCount).toLocaleString('en-US')})`) },
    { label: l('آخر مراجعة', 'Last checked'), value: l('2 نوفمبر 2026', '2 November 2026') }
  ],
  'visit/location-map': [
    { label: l('العنوان', 'Address'), value: l('المباركية، شارع سوق الغربللي، مدينة الكويت', 'Al-Mubarakiya, Gharabally Souq St, Kuwait City') },
    { label: l('نقطة الخريطة', 'Map point'), value: l('29.373827, 47.972932', '29.373827, 47.972932') },
    { label: l('رابط الخريطة', 'Map link'), value: l('خرائط Google / maps.app.goo.gl', 'Google Maps / maps.app.goo.gl') }
  ],
  'visit/parking': [
    { label: l('أفضل نهج', 'Best approach'), value: l('موقف قريب مع مشي قصير', 'Nearby parking with a short walk') },
    { label: l('وقت حساس', 'Sensitive timing'), value: l('المساء والعطلات', 'Evenings and holidays') },
    { label: l('خطة بديلة', 'Fallback'), value: l('إنزال سريع ثم التقاء لاحق', 'Quick drop-off then regroup later') }
  ],
  'food/restaurants': [
    { label: l('أفضل استخدام', 'Best use'), value: l('وجبة ضمن خطة الزيارة لا بدلًا منها', 'Make the meal part of the visit, not the whole visit') },
    { label: l('تنبيه', 'Important note'), value: l('الانتظار يختلف حسب الوقت', 'Waiting changes by time window') },
    { label: l('الأساس', 'Core choice'), value: l('اختر النوع قبل الاسم', 'Choose the meal type before the name') }
  ],
  'food/coffee-tea': [
    { label: l('أنسب وقت', 'Best time'), value: l('استراحة بين محطتين', 'A break between two stops') },
    { label: l('الأنسب لـ', 'Best for'), value: l('الزيارة القصيرة أو إعادة ترتيب الجولة', 'Short visits or regrouping the route') },
    { label: l('تنبيه', 'Important note'), value: l('القهوة خيار مرن إذا طال انتظار الطعام', 'Coffee is a flexible fallback when meal waiting grows') }
  ],
  'food/evening-dining': [
    { label: l('الأجواء', 'Atmosphere'), value: l('الأكثر حيوية عادة', 'Usually the liveliest window') },
    { label: l('الخطر الأكبر', 'Biggest risk'), value: l('الانتظار الطويل إذا تأخر القرار', 'Long waiting if the meal decision comes too late') },
    { label: l('الأفضل', 'Best approach'), value: l('حدّد وقت الأكل مبكرًا', 'Lock in the meal window early') }
  ],
  'nearby/grand-mosque': [
    { label: l('نوع الزيارة', 'Visit style'), value: l('محطة ثقافية ودينية', 'Cultural and religious stop') },
    { label: l('الأهم', 'Most important'), value: l('مراعاة الصلاة واللباس', 'Respect prayer times and dress expectations') },
    { label: l('الأفضل', 'Best use'), value: l('جزء من نصف يوم هادئ', 'Part of a calmer half-day') }
  ]
};

const specificFaqs: Record<string, GuideFaq[]> = {
  'visit/opening-hours': [
    {
      question: l('هل سوق المباركية مفتوح طوال اليوم؟', 'Is Souk Al-Mubarakiya open all day?'),
      answer: l(
        'المرجع العام المستخدم في الموقع هو 08:00–22:00 يوميًا لمنطقة السوق العامة، لكن هذا لا يعني أن كل محل أو مطعم يعمل طوال هذه الفترة نفسها.',
        'The site currently uses 08:00–22:00 daily as a general reference for the market area, but that does not mean every shop or restaurant follows that full window.'
      )
    },
    {
      question: l('ما أفضل وقت للوصول إذا كانت الزيارة الأولى؟', 'What is the best arrival time for a first visit?'),
      answer: l(
        'يعتمد ذلك على هدفك: الصباح أسهل للمشي والهدوء، بينما يمنح المساء أجواء السوق الأكثر امتلاءً.',
        'It depends on your goal: mornings are easier for calmer walking, while evenings give you the souk at its fullest.'
      )
    },
    {
      question: l('هل تعتمد هذه الصفحة على وقت موثق؟', 'Does this page rely on a dated listing?'),
      answer: l(
        'نعم. تستخدم الصفحة مرجعًا مؤرخًا للموقع العام، مع تذكير واضح بأن الخدمات الفردية تحتاج تحققًا مباشرًا في يوم الزيارة.',
        'Yes. The page uses a dated reference for the general market listing, while clearly reminding visitors that individual services still require direct checking on the day.'
      )
    }
  ],
  'visit/location-map': [
    {
      question: l('أين يقع سوق المباركية بالضبط؟', 'Where exactly is Souk Al-Mubarakiya?'),
      answer: l(
        'يقع في مدينة الكويت في منطقة المباركية على شارع سوق الغربللي، ونقطة الخريطة المرجعية المستخدمة في الموقع هي 29.373827, 47.972932.',
        'It is in Kuwait City within the Al-Mubarakiya area on Gharabally Souq Street, and the reference map point used on the site is 29.373827, 47.972932.'
      )
    },
    {
      question: l('هل أصل إلى نقطة الخريطة نفسها أم إلى مدخل قريب؟', 'Should I aim for the map pin itself or a nearby entrance?'),
      answer: l(
        'الأفضل عادة الوصول إلى الحافة أو المدخل الأقرب لهدفك داخل السوق، لأن السوق منطقة مفتوحة لا مبنى واحدًا فقط.',
        'It is usually better to target the edge or the entrance closest to your goal inside the souk, because the souk is an open district rather than one single building.'
      )
    },
    {
      question: l('هل هذه الصفحة تكفي لتحديد نقطة الإنزال؟', 'Is this page enough to decide the drop-off point?'),
      answer: l(
        'هي تعطيك إطارًا واضحًا، لكن نقطة الإنزال الفعلية ما زالت ترتبط بوقت اليوم ونوع الزيارة ووسيلة الوصول.',
        'It gives you a clear framework, but the exact drop-off point still depends on time of day, visit style and your transport mode.'
      )
    }
  ],
  'food/restaurants': [
    {
      question: l('هل أحتاج مطعمًا محددًا قبل الوصول؟', 'Do I need a specific restaurant in mind before arriving?'),
      answer: l(
        'ليس دائمًا. في كثير من الحالات يكفي أن تحدد نوع الوجبة والنافذة الزمنية، ثم تختار المكان الأنسب عند الوصول.',
        'Not always. In many cases it is enough to decide on the type of meal and time window, then choose the most suitable place when you arrive.'
      )
    },
    {
      question: l('ما أكثر ما يربك الزائر عند الأكل في المباركية؟', 'What confuses visitors most when eating in Al-Mubarakiya?'),
      answer: l(
        'تأخير قرار الطعام إلى وقت التعب أو الذروة، ما يجعل الانتظار والاختيار أصعب بكثير.',
        'Delaying the food decision until the group is already tired or the peak has arrived, which makes waiting and choosing much harder.'
      )
    },
    {
      question: l('هل هذه الصفحة بديل عن القائمة أو الأسعار؟', 'Does this page replace menus or pricing?'),
      answer: l(
        'لا. هي تساعدك على قرار الإيقاع والتوقيت والنوع، أما القائمة والسعر والانتظار فيجب مراجعتها مع الجهة نفسها.',
        'No. It helps with timing, pacing and meal type, while menus, pricing and waiting must still be checked with the venue itself.'
      )
    }
  ],
  'nearby/grand-mosque': [
    {
      question: l('هل يمكن إضافة المسجد الكبير إلى زيارة السوق بسهولة؟', 'Can the Grand Mosque be added to a souk visit easily?'),
      answer: l(
        'نعم، إذا كان لديك وقت كافٍ وبرنامج هادئ نسبيًا، أما اليوم القصير جدًا فقد يجعل الدمج مرهقًا أو متسرعًا.',
        'Yes, if you have enough time and a relatively calm schedule. On a very short day, the pairing can become rushed or tiring.'
      )
    },
    {
      question: l('هل تعتمد هذه الصفحة على شروط زيارة رسمية؟', 'Does this page replace official visiting rules?'),
      answer: l(
        'لا. الصفحة تخطيطية وتمهيدية، بينما تبقى شروط الزيارة الرسمية واللباس والإتاحة من اختصاص الجهة المعنية.',
        'No. The page is planning-led and introductory, while official access rules, dress expectations and availability remain the responsibility of the venue.'
      )
    },
    {
      question: l('ما أفضل طريقة لدمج المسجد مع المباركية؟', 'What is the best way to combine the mosque with Al-Mubarakiya?'),
      answer: l(
        'الطريقة الأفضل هي جعله جزءًا من نصف يوم ثقافي هادئ، لا إضافته كملحق سريع في نهاية يوم مزدحم أصلًا.',
        'The best way is to make it part of a calm cultural half-day rather than tacking it onto the end of an already crowded schedule.'
      )
    }
  ]
};

function getCategory(slug: string): keyof typeof defaultFacts {
  return slug.split('/')[0] as keyof typeof defaultFacts;
}

export function getGuideFacts(slug: string): GuideFact[] {
  return specificFacts[slug] ?? defaultFacts[getCategory(slug)];
}

export function getGuideFaqs(slug: string): GuideFaq[] {
  return specificFaqs[slug] ?? defaultFaqs[getCategory(slug)];
}

export function localizeSeoText(text: LocalizedText, lang: 'ar' | 'en'): string {
  return text[lang];
}
