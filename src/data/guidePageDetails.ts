type LocalizedText = {
  ar: string;
  en: string;
};

type GuideDetail = {
  audienceTitle: LocalizedText;
  audienceBody: LocalizedText;
  pairingTitle: LocalizedText;
  pairingBody: LocalizedText;
  sourceTitle: LocalizedText;
  sourceBody: LocalizedText;
  checklistTitle: LocalizedText;
  checklist: LocalizedText[];
};

const l = (ar: string, en: string): LocalizedText => ({ ar, en });

const defaultDetails: Record<string, Omit<GuideDetail, 'checklist'>> = {
  visit: {
    audienceTitle: l('لمن تفيد هذه الصفحة؟', 'Who is this page for?'),
    audienceBody: l(
      'تفيد الزائر لأول مرة، والعائلة التي تريد تقليل المفاجآت، وكل من يريد اتخاذ قرار الوصول والتوقيت قبل الانطلاق.',
      'This page is most useful for first-time visitors, families trying to reduce uncertainty, and anyone who wants to decide timing and access before leaving.'
    ),
    pairingTitle: l('كيف تستخدمها مع بقية الدليل؟', 'How should you use it with the rest of the guide?'),
    pairingBody: l(
      'ابدأ بها قبل الخروج، ثم انتقل إلى صفحة المسار أو الطعام أو المعلم القريب الذي يناسب هدفك الأساسي.',
      'Use it before you leave, then move on to the route, food or nearby-landmark page that matches your main goal.'
    ),
    sourceTitle: l('حالة المعلومات', 'How current is this information?'),
    sourceBody: l(
      'هذه الصفحة تنظيمية وعملية. معلومات التشغيل الفعلية مثل الزحام أو ساعات بعض الخدمات تحتاج تحققًا مباشرًا في يوم الزيارة.',
      'This page is practical and planning-led. Live operational details such as crowd conditions or the hours of specific services still need direct checking on the day.'
    ),
    checklistTitle: l('قائمة سريعة قبل الانطلاق', 'Quick checklist before you go')
  },
  heritage: {
    audienceTitle: l('لمن تفيد هذه الصفحة؟', 'Who is this page for?'),
    audienceBody: l(
      'تفيد من يريد قراءة ثقافية أعمق للمباركية، لا من يبحث فقط عن المرور السريع أو وجبة في السوق.',
      'This page is most useful for visitors who want a deeper cultural reading of Al-Mubarakiya, not only a quick pass or a meal stop.'
    ),
    pairingTitle: l('كيف تستخدمها مع بقية الدليل؟', 'How should you use it with the rest of the guide?'),
    pairingBody: l(
      'استخدمها مع صفحات المسارات أو المعالم القريبة لتكوين نصف يوم ثقافي بدلاً من الوقوف عند معلومة تاريخية منفصلة.',
      'Use it together with route pages or nearby-landmark pages to build a cultural half-day instead of treating the topic as an isolated fact.'
    ),
    sourceTitle: l('حالة المعلومات', 'How current is this information?'),
    sourceBody: l(
      'هذه الصفحة تفسيرية وتاريخية. عند إضافة تاريخ أو وضع تشغيلي حديث، ينبغي ربطه بمصدر أكاديمي أو رسمي أو تحقق ميداني مؤرخ.',
      'This page is interpretive and historical. Any later addition of precise dates or current operating status should be tied to academic, official or dated field verification.'
    ),
    checklistTitle: l('ما الذي تراجعه قبل الاعتماد عليها؟', 'What should you review before relying on it?')
  },
  shopping: {
    audienceTitle: l('لمن تفيد هذه الصفحة؟', 'Who is this page for?'),
    audienceBody: l(
      'تفيد من يريد المشاهدة والشراء بوعي، سواء كان الهدف هدية أو مقارنة أو فهمًا أفضل لثقافة السوق.',
      'This page is useful for visitors who want to browse or buy with more awareness, whether the goal is gifting, comparison or a better understanding of souk culture.'
    ),
    pairingTitle: l('كيف تستخدمها مع بقية الدليل؟', 'How should you use it with the rest of the guide?'),
    pairingBody: l(
      'اقرأها بعد صفحة الخريطة أو مناطق السوق، ثم اجعلها جزءًا من زيارة أخف بدل تحويل اليوم كله إلى بحث مشتت عن الشراء.',
      'Read it after the map or market-zones page, then use it as part of a lighter visit rather than turning the whole day into scattered shopping.'
    ),
    sourceTitle: l('حالة المعلومات', 'How current is this information?'),
    sourceBody: l(
      'هذه الصفحة تساعد على القرار والسلوك، لا على تأكيد الأسعار أو المخزون. البائع والمشهد الفعلي وقت الوصول يظلان المرجع النهائي.',
      'This page supports decision-making and behaviour, not live confirmation of prices or stock. The seller and the real scene on arrival remain the final reference.'
    ),
    checklistTitle: l('ما الذي تفكر فيه قبل الشراء؟', 'What should you think about before buying?')
  },
  food: {
    audienceTitle: l('لمن تفيد هذه الصفحة؟', 'Who is this page for?'),
    audienceBody: l(
      'تفيد من يريد أن يربط الطعام بإيقاع الزيارة، لا أن يختار مكانًا بشكل عشوائي ثم يعيد ترتيب اليوم كله بعد ذلك.',
      'This page is useful for visitors who want food to fit the rhythm of the visit, rather than picking a place randomly and rearranging the whole day afterwards.'
    ),
    pairingTitle: l('كيف تستخدمها مع بقية الدليل؟', 'How should you use it with the rest of the guide?'),
    pairingBody: l(
      'اقرأها مع صفحات أفضل وقت أو المسارات القصيرة، لأن قرار الأكل في المباركية يرتبط كثيرًا بوقت الوصول والخروج.',
      'Read it together with best-time or short-route pages, because food choices in Al-Mubarakiya are tightly linked to arrival and exit timing.'
    ),
    sourceTitle: l('حالة المعلومات', 'How current is this information?'),
    sourceBody: l(
      'هذه الصفحة إرشادية غير دعائية. القوائم والأسعار والانتظار وحالة الجلسات تتغير مباشرة في الموقع ويجب سؤال الجهة المعنية عنها.',
      'This page is guidance-led rather than promotional. Menus, pricing, waiting time and seating conditions change on site and should be checked directly.'
    ),
    checklistTitle: l('قائمة قرار الطعام السريع', 'Quick food-planning checklist')
  },
  nearby: {
    audienceTitle: l('لمن تفيد هذه الصفحة؟', 'Who is this page for?'),
    audienceBody: l(
      'تفيد من يريد توسيع زيارة السوق إلى معلم قريب بطريقة منطقية، من دون أن يتحول اليوم إلى انتقالات كثيرة بلا ترابط.',
      'This page is for visitors who want to extend the souk visit to a nearby landmark in a logical way, without turning the day into disconnected transfers.'
    ),
    pairingTitle: l('كيف تستخدمها مع بقية الدليل؟', 'How should you use it with the rest of the guide?'),
    pairingBody: l(
      'استخدمها مع مسارات نصف اليوم أو اليوم الكامل، ثم احذف أي محطة إضافية إذا كان الوقت أو الطقس لا يسمحان.',
      'Use it with the half-day or full-day route pages, then remove any extra stop if time or weather do not support it.'
    ),
    sourceTitle: l('حالة المعلومات', 'How current is this information?'),
    sourceBody: l(
      'هذه الصفحة تساعد على الترتيب العام. شروط الزيارة الرسمية والإتاحة الفعلية واللباس والحجز يجب الرجوع فيها إلى الجهة المعنية مباشرة.',
      'This page helps with overall planning. Official access rules, current availability, dress requirements or booking details should be checked directly with the venue.'
    ),
    checklistTitle: l('قبل إضافة هذا المعلم إلى برنامجك', 'Before adding this landmark to your plan')
  },
  routes: {
    audienceTitle: l('لمن يفيد هذا المسار؟', 'Who is this route for?'),
    audienceBody: l(
      'يفيد من يريد برنامجًا جاهزًا نسبيًا يخفف عدد القرارات في أثناء الزيارة، مع إبقاء مساحة للمرونة إذا تغيّر الجو أو الزحام.',
      'This route is useful for visitors who want a relatively ready-made plan that reduces decision fatigue on the day, while still leaving room for flexibility if weather or crowds shift.'
    ),
    pairingTitle: l('كيف تستخدمه مع بقية الدليل؟', 'How should you use it with the rest of the guide?'),
    pairingBody: l(
      'اقرأه بعد صفحات التوقيت والوصول، ثم ثبّت فقط المحطات الأساسية واترك البقية كخيارات يمكن حذفها بسهولة.',
      'Read it after the timing and access pages, then lock in only the essential stops and keep the rest as optional layers you can drop easily.'
    ),
    sourceTitle: l('حالة المعلومات', 'How current is this information?'),
    sourceBody: l(
      'هذا المسار تخطيطي لا تنفيذي حرفي. أفضل نسخة منه تتغير حسب الحرارة والزحام ووسيلة الوصول وحالة المجموعة في اليوم نفسه.',
      'This route is planning-led rather than a literal script. The best version changes with heat, crowding, transport mode and the condition of your group on the day.'
    ),
    checklistTitle: l('ماذا تثبّت قبل تطبيق المسار؟', 'What should you lock in before using this route?')
  }
};

const checklists: Record<string, LocalizedText[]> = {
  'visit/opening-hours': [
    l('ثبّت ما إذا كانت الزيارة صباحية أم مسائية قبل الخروج', 'Decide whether the visit is a morning or evening one before leaving'),
    l('افصل بين ساعات السوق العامة وساعات المتجر أو المطعم الذي تعتمد عليه', 'Separate general souk hours from the hours of the specific store or eatery you depend on'),
    l('خفف خطتك إذا كانت الزيارة في عطلة أو مناسبة', 'Simplify the plan if the visit falls on a holiday or special occasion'),
    l('احتفظ بخطة بديلة إذا كان الهدف خدمة واحدة فقط', 'Keep a backup plan if the whole outing depends on one service')
  ],
  'visit/friday-hours': [
    l('راجع توقيت الزيارة بالنسبة لمنتصف اليوم والمساء', 'Review whether you are arriving closer to midday or evening'),
    l('لا تبنِ الخطة على افتراض أن كل الأنشطة تعمل منذ بداية اليوم', 'Do not assume every activity is fully running from the start of the day'),
    l('خفف عدد المحطات إذا كانت الجمعة جزءًا من عطلة مزدحمة', 'Reduce the number of stops if Friday falls in a busy holiday pattern'),
    l('أكد وجبة الطعام أو القهوة قبل الوصول إذا كانت أولوية', 'Confirm the meal or coffee plan before arrival if it is a priority')
  ],
  'visit/location-map': [
    l('اختر الحافة الأنسب للسوق لا مجرد الدبوس الأوسط', 'Choose the most useful edge of the souk, not just the central pin'),
    l('أرسل نقطة اللقاء لمن يرافقك قبل الوصول', 'Share the meeting point with companions before arrival'),
    l('اربط المدخل بهدفك الأول داخل السوق', 'Match the entrance to your first goal inside the souk'),
    l('خفف الاعتماد على السيارة داخل الممرات نفسها', 'Avoid assuming a car can solve the inner-lane part of the trip')
  ],
  'visit/parking': [
    l('اختر موقفًا بمسار مشاة واضح لا أقرب نقطة فقط', 'Choose parking with a clear walking route, not only the shortest distance'),
    l('اترك هامش وقت للبحث عن الموقف في المساء', 'Leave buffer time for the parking search in the evening'),
    l('ثبت نقطة اللقاء بعد الركن مباشرة', 'Set the regroup point as soon as you park'),
    l('جهز خيار إنزال سريع إذا بدا الوقوف مرهقًا', 'Prepare a quick drop-off fallback if parking becomes burdensome')
  ],
  'visit/bus-taxi': [
    l('حدد أولوية اليوم: أقل كلفة أم أقل مشي أم أسهل تنسيق', 'Set the day priority: lower cost, less walking or easier coordination'),
    l('اتفق على نقطة الإنزال أو الالتقاء قبل الحركة', 'Agree on the drop-off or pick-up point before moving'),
    l('لا تفترض أن السيارة تصل إلى داخل الممرات بسهولة', 'Do not assume the vehicle can reach the inner lanes easily'),
    l('خفف المحطات إذا كانت العودة تعتمد على وقت محدد', 'Reduce stops if the return depends on a fixed pickup time')
  ],
  'visit/from-airport': [
    l('قرر إن كنت ستذهب مباشرة أم بعد الفندق أولًا', 'Decide whether you are going directly or after the hotel'),
    l('خفف الأمتعة أو التخزين إن أمكن قبل زيارة السوق', 'Reduce or store luggage first if possible'),
    l('اربط توقيت الوصول بحيوية السوق الفعلية', 'Match arrival timing to the part of the day when the souk is actually alive'),
    l('احتفظ بخطة عودة سهلة إذا كانت الزيارة في يوم السفر', 'Keep the return simple if the visit falls on a travel day')
  ],
  'visit/best-time': [
    l('حدد هل تريد الهدوء أم الأجواء أم الطعام أولًا', 'Decide whether you want calm, atmosphere or food first'),
    l('راجع الطقس الفعلي لا الموسم فقط', 'Check the live weather, not only the season'),
    l('خفف التوقعات في عطلات المساء المزدحمة', 'Moderate expectations in busy holiday evenings'),
    l('اجعل مدة الزيارة متناسبة مع الحرارة والطاقة', 'Keep the visit length proportional to heat and energy')
  ],
  'visit/how-long': [
    l('ابدأ بالحد الأدنى الواقعي ثم زد إذا سمح اليوم', 'Start from the realistic minimum and expand only if the day allows'),
    l('أضف وقتًا إذا كانت هناك وجبة كاملة أو شراء فعلي', 'Add time if there will be a full meal or real shopping'),
    l('اختصر الجولة إذا كان لديك موعد لاحق قريب', 'Shorten the route if another appointment follows soon'),
    l('اترك وقتًا للعودة أو النقل لا للمشي فقط', 'Leave time for the return or transport, not only for the walk itself')
  ],
  'visit/accessibility': [
    l('اختر مدخلًا واسعًا وزمنًا أقل ازدحامًا', 'Choose a wider entrance and a less crowded time'),
    l('اجعل المسار قصيرًا وقابلًا للعودة السريعة', 'Keep the route short and easy to reverse'),
    l('ثبت محطة راحة أو جلوس ضمن الخطة', 'Include a rest or seating stop in the plan'),
    l('تحقق من المرافق المهمة في البداية لا في النهاية', 'Check essential facilities early rather than waiting until the end')
  ],
  'visit/with-kids': [
    l('ابدأ بهدف واحد واضح يناسب الأطفال', 'Start with one clear goal that suits the children'),
    l('احسب الراحة والطعام ضمن الجولة منذ البداية', 'Build rest and food into the route from the start'),
    l('خفف حمل المشتريات أثناء المشي', 'Keep shopping bags light while walking'),
    l('حدد نقطة خروج سهلة إذا ظهر التعب مبكرًا', 'Set an easy exit point in case tiredness shows early')
  ],
  'heritage/history': [
    l('فرّق بين تاريخ السوق وتاريخ المعالم الفردية', 'Separate the history of the souk from that of individual landmarks'),
    l('لا تعتمد على تاريخ شائع بلا مصدر', 'Do not rely on an often-repeated date without a source'),
    l('اقرأ هذه الصفحة مع مسار ثقافي أو معلم قريب', 'Pair this page with a heritage route or nearby landmark'),
    l('ابحث عن تاريخ المراجعة إذا أضيفت معلومات أحدث لاحقًا', 'Look for review dates if newer detail is added later')
  ],
  'heritage/sheikh-mubarak-kiosk': [
    l('تعامل معه كمحطة قصيرة لا كبرنامج كامل', 'Treat it as a short stop, not a full programme'),
    l('لا تبنِ اليوم على افتراض الدخول الداخلي', 'Do not build the day around assumed interior access'),
    l('استخدمه كنقطة توجيه أو لقاء داخل الجولة', 'Use it as an orientation or meeting marker within the walk'),
    l('اربطه بصفحة التاريخ أو المسار القصير', 'Pair it with the history page or the short route')
  ],
  'heritage/traditional-souqs': [
    l('راقب كيف ترتبط الأسماء بنوع السلع أو الحرف', 'Notice how names connect to goods or trades'),
    l('اقرأ السوق كشبكة تخصصات لا كممر واحد فقط', 'Read the souk as a network of specialisations, not one single lane'),
    l('لا تتوقع بقاء كل التقسيمات القديمة بشكلها الأصلي', 'Do not expect every old division to remain in its original form'),
    l('اربط القراءة التاريخية بخريطة المناطق الحالية', 'Connect the historical reading to the present-day zones page')
  ],
  'heritage/architecture': [
    l('لاحظ كيف يتغير الضوء والظل داخل الممرات', 'Notice how light and shade shift through the lanes'),
    l('راقب العلاقة بين المواد والحركة لا الواجهة فقط', 'Watch the relation between material and movement, not only the facade'),
    l('قارن بين الأجزاء الأكثر تجديدًا والأكثر تقليدية', 'Compare more renewed-feeling parts with more traditional ones'),
    l('استخدمها مع التصوير أو مسار نصف اليوم الثقافي', 'Use it with photography or the heritage half-day route')
  ],
  'heritage/fire-and-restoration': [
    l('افصل بين خبر الحريق وبين الوضع الحالي كله', 'Separate the fire event from the entire current condition'),
    l('ابحث عن تاريخ أي تحديث ترميمي لاحق', 'Look for the date of any later restoration update'),
    l('لا تعتبر هذه الصفحة مرجعًا تشغيليًا لحظيًا', 'Do not treat this page as a live operational status page'),
    l('استخدمها لفهم المعنى المعاصر للمكان', 'Use it to understand the contemporary meaning of the place')
  ],
  'heritage/safat-square': [
    l('أضفها فقط إذا كان لديك وقت مشي مريح', 'Add it only if you have comfortable walking time'),
    l('اربطها بجولة التاريخ لا بيوم طعام مزدحم', 'Pair it with a heritage walk, not a crowded food-heavy day'),
    l('راجع الحرارة والمسافة قبل الخروج سيرًا', 'Review heat and walking distance before setting off on foot'),
    l('استخدمها لفهم قلب المدينة لا كصورة منفصلة فقط', 'Use it to understand the city core, not only as a separate photo stop')
  ],
  'shopping/gold-market': [
    l('حدد إن كنت متفرجًا أم مشتريًا فعليًا', 'Decide whether you are browsing or buying seriously'),
    l('اسأل عن المواصفات الأساسية قبل السعر النهائي', 'Ask about core specifications before the final price'),
    l('قارن بين أكثر من واجهة أو متجر', 'Compare more than one display or shop'),
    l('احتفظ بالإيصال والمعلومات المكتوبة عند الشراء', 'Keep the receipt and written details when buying')
  ],
  'shopping/spice-market': [
    l('حدد ما إذا كان الشراء للاستخدام أم للهدايا', 'Decide whether the purchase is for use or gifting'),
    l('قارن بين الأنواع والكمية قبل الدفع', 'Compare types and quantities before paying'),
    l('خفف الحمل إذا كنت ستكمل المشي طويلًا', 'Keep the purchase light if a longer walk follows'),
    l('اسأل عن التغليف إذا كان السفر قريبًا', 'Ask about packaging if travel follows soon')
  ],
  'shopping/dates-sweets': [
    l('اشترِ بعد الجولة الأساسية لا في بدايتها غالبًا', 'Usually buy after the main walk rather than at the beginning'),
    l('حدد إن كان الهدف تذوقًا أم هدية', 'Decide whether the goal is tasting or gifting'),
    l('راجع التغليف ومدة الحفظ إذا لزم', 'Review packaging and shelf life if needed'),
    l('لا تحول الشراء إلى حمل زائد في بقية اليوم', 'Do not let the purchase become extra weight for the rest of the day')
  ],
  'shopping/perfume-bakhoor': [
    l('جرّب عددًا محدودًا من الروائح أولًا', 'Test a limited number of scents first'),
    l('اترك وقتًا قصيرًا بين التجارب', 'Leave short pauses between tests'),
    l('فرّق بين هدية عامة واختيار شخصي جدًا', 'Separate a general gift from a very personal choice'),
    l('اسأل عن التغليف وطبيعة المنتج قبل الشراء', 'Ask about packaging and product type before buying')
  ],
  'shopping/bisht-textiles': [
    l('اسأل نفسك هل الهدف فرجة أم شراء جاد', 'Ask yourself whether the goal is browsing or serious buying'),
    l('افهم الخامة أو الغرض قبل الالتزام', 'Understand fabric or purpose before committing'),
    l('خفف التسرع في هذا النوع من المشتريات', 'Avoid rushing this type of purchase'),
    l('اربطها بصفحات الحرف أو المسار الثقافي', 'Pair it with craft pages or a heritage route')
  ],
  'shopping/souvenirs': [
    l('حدد ميزانية وعددًا تقريبيًا للهدايا', 'Set a budget and a rough number of gifts'),
    l('اشترِ ما يحمل معنى لا ما يملأ الحقيبة فقط', 'Buy what carries meaning, not just what fills a bag'),
    l('خفف الوزن إذا كان السفر قريبًا', 'Keep weight down if travel is near'),
    l('أجل الشراء لنهاية الجولة إذا كان ممكنًا', 'Delay buying until the end of the visit if possible')
  ],
  'shopping/bargaining-payment': [
    l('اسأل عن السعر النهائي قبل التغليف أو الإنهاء', 'Ask for the final price before packaging or final steps'),
    l('أكد طريقة الدفع المقبولة مبكرًا', 'Confirm the accepted payment method early'),
    l('لا تفترض أن كل شيء قابل للتفاوض', 'Do not assume everything is negotiable'),
    l('اترك الصفقة بهدوء إذا لم تناسبك', 'Leave the deal calmly if it does not suit you')
  ],
  'shopping/market-zones-map': [
    l('ابدأ بهدف واحد ثم أضف ما حوله', 'Start with one goal, then add what sits nearby'),
    l('اختر المدخل بناءً على أول محطة', 'Choose the entrance based on the first stop'),
    l('خطط للعودة قبل التعمق في الممرات', 'Think about the return before going deep into the lanes'),
    l('استخدم الصفحة لتقليل المشي العشوائي', 'Use the page to reduce aimless wandering')
  ],
  'food/restaurants': [
    l('حدد هل تريد وجبة كاملة أم توقفًا قصيرًا', 'Decide whether you want a full meal or a shorter stop'),
    l('راجع وقت الانتظار قبل الجلوس', 'Review waiting time before sitting down'),
    l('اختر ما يناسب إيقاع المجموعة لا الضجة فقط', 'Choose what fits the group rhythm, not buzz alone'),
    l('ثبت نقطة ما بعد الطعام: قهوة أم خروج أم مشي خفيف', 'Set what comes after the meal: coffee, exit or a light walk')
  ],
  'food/kuwaiti-dishes': [
    l('اختر نوع الطبق قبل اسم المكان', 'Choose the dish type before the venue name'),
    l('لا تحاول تذوق كل شيء في زيارة واحدة', 'Do not try to taste everything in one visit'),
    l('اسأل عمّا يناسب المشاركة إذا كنت مع مجموعة', 'Ask what works for sharing if you are with a group'),
    l('راجع القيود الغذائية مباشرة قبل الطلب', 'Check dietary restrictions directly before ordering')
  ],
  'food/seafood-grills': [
    l('حدد إن كنت تريد وجبة أخف أم أثقل', 'Decide whether you want a lighter or heavier meal'),
    l('اجعل وقت الجلوس واضحًا لا بين محطتين', 'Use a clear meal window rather than squeezing it between stops'),
    l('خفف بقية الجولة بعد وجبة كبيرة', 'Lighten the rest of the route after a larger meal'),
    l('اسأل عن خيار المشاركة إذا كانت المجموعة كبيرة', 'Ask about sharing if the group is larger')
  ],
  'food/breakfast': [
    l('اجعل الفطور بداية اليوم لا عبئًا على باقيه', 'Let breakfast start the day rather than slow the rest of it down'),
    l('استخدم الصباح للمشي السهل أو التصوير', 'Use the morning for easier walking or photography'),
    l('اختر وجبة تناسب جدول اليوم اللاحق', 'Choose a meal that suits the rest of the day’s schedule'),
    l('لا تخلط الفطور الطويل مع برنامج مزدحم جدًا بعده', 'Do not pair a long breakfast stop with an overly packed schedule afterwards')
  ],
  'food/coffee-tea': [
    l('اجعلها محطة استراحة لا قرارًا مربكًا', 'Treat it as a pause rather than a complicated decision'),
    l('اخترها إذا كان الوقت محدودًا أو المجموعة منقسمة', 'Choose it when time is limited or the group has split interests'),
    l('راجع نوع الجلسة ومدة الانتظار', 'Check seating style and waiting time'),
    l('استخدمها كنقطة لقاء أو إعادة ترتيب للجولة', 'Use it as a regrouping or meeting point for the route')
  ],
  'food/evening-dining': [
    l('حدد هل ستتعشى قبل المشي أم بعده', 'Decide whether dinner comes before or after the main walk'),
    l('اترك وقتًا إضافيًا للانتظار في الذروة', 'Leave extra time for waiting during peak hours'),
    l('لا تجعل بقية اليوم تعتمد على عشاء سريع مضمُون', 'Do not build the rest of the evening on an assumed quick dinner'),
    l('ثبت وسيلة العودة أو نقطة الخروج مسبقًا', 'Lock in the return or exit point in advance')
  ],
  'nearby/grand-mosque': [
    l('راجع أوقات الصلاة والزيارة قبل الذهاب', 'Review prayer and visit times before going'),
    l('التزم بالملابس والسلوك المناسبين', 'Follow suitable dress and conduct'),
    l('أضفه فقط إذا كان لديك وقت ثقافي هادئ', 'Add it only if you have time for a calmer cultural stop'),
    l('لا تضغط اليوم إذا كانت المباركية نفسها هي الأولوية', 'Do not overload the day if the souk is still the main priority')
  ],
  'nearby/kuwait-national-museum': [
    l('اختر إن كان المتحف هو المحور أم امتدادًا أقصر', 'Choose whether the museum is the main anchor or a shorter extension'),
    l('راجع التوقيت الرسمي قبل الحركة', 'Check official hours before moving'),
    l('خفف محطات اليوم إذا جمعت السوق والمتحف معًا', 'Reduce the day’s other stops if you combine the souk and museum'),
    l('اترك وقتًا للانتقال والراحة الذهنية', 'Leave time for transfer and mental pace changes')
  ],
  'nearby/sadu-house': [
    l('أضفه إذا كان اهتمامك بالحرفة أو النسيج مرتفعًا', 'Add it if your interest in craft or textiles is strong'),
    l('اربطه بمسار ثقافي لا بيوم تسوق كثيف', 'Pair it with a cultural route, not an intense shopping day'),
    l('راجع المعلومات الرسمية قبل الذهاب', 'Review official information before going'),
    l('خفف بقية اليوم إذا كان الهدف هو القراءة الهادئة', 'Lighten the rest of the day if the goal is a calmer reading of place')
  ],
  'nearby/seif-palace': [
    l('تعامل معه كنقطة مشاهدة خارجية لا دخول مضمون', 'Treat it as an external-view stop, not guaranteed access'),
    l('ادمجه مع مشي خارجي في المركز التاريخي', 'Fold it into an external city-centre walk'),
    l('احترم حدود المشاهدة والوصول', 'Respect viewing and access boundaries'),
    l('لا تجعل اليوم كله يدور حوله وحده', 'Do not let the entire day revolve around it alone')
  ],
  'routes/90-minute-market-walk': [
    l('ثبت نقطة البداية والنهاية قبل الوصول', 'Fix the start and end points before arrival'),
    l('لا تحاول تغطية كل السوق في هذا الزمن القصير', 'Do not try to cover the whole souk in this short time'),
    l('اجعل لديك محطة راحة أو شراب واحدة واضحة', 'Keep one clear break or drink stop'),
    l('أضف أي محطة إضافية فقط إذا بقي وقت وطاقة', 'Add extra stops only if time and energy remain')
  ],
  'routes/half-day-heritage': [
    l('اختر السوق كمحور ثم أضف معلمين فقط غالبًا', 'Keep the souk as the core, then usually add only two landmarks'),
    l('اترك وقتًا للاستراحة أو الطعام', 'Leave time for food or a rest break'),
    l('خفف التنقلات غير الضرورية بين المحطات', 'Reduce unnecessary transfers between stops'),
    l('احذف المحطة الأقل أهمية إذا بدأ اليوم يطول', 'Drop the least important stop if the day starts stretching')
  ],
  'routes/evening-food-walk': [
    l('ابدأ بمرور قصير قبل اختيار الطعام', 'Begin with a short walk before choosing food'),
    l('حدد إن كانت الوجبة هي المحطة الرئيسية أم القهوة', 'Decide whether the main stop is dinner or coffee'),
    l('لا تضغط المسار بكثرة نقاط داخل الذروة', 'Do not overpack the route with too many peak-hour stops'),
    l('ثبت نقطة الخروج أو الالتقاء مسبقًا', 'Set the exit or regroup point in advance')
  ],
  'routes/family-friendly': [
    l('اجعل عدد المحطات قليلًا وواضحًا', 'Keep the number of stops small and clear'),
    l('خطط للراحة أو الطعام مبكرًا', 'Plan the break or meal early'),
    l('ابقَ قريبًا من نقطة خروج مفهومة', 'Stay relatively near a clear exit point'),
    l('اختصر الجولة فورًا إذا ظهرت علامات التعب', 'Shorten the route immediately if fatigue shows')
  ],
  'routes/summer-heat': [
    l('اختر وقتًا ألطف ونسخة أقصر من الزيارة', 'Choose a gentler time window and a shorter version of the visit'),
    l('قلل المشي غير الضروري والالتفافات', 'Reduce unnecessary walking and detours'),
    l('ادمج الراحة والماء ضمن الخطة منذ البداية', 'Build rest and water into the plan from the start'),
    l('اقبل حذف محطات إذا ارتفعت الحرارة', 'Be ready to remove stops if the heat rises')
  ],
  'routes/kuwait-city-one-day': [
    l('اجعل المباركية نقطة الانطلاق لا مجرد محطة عابرة', 'Use Al-Mubarakiya as the real starting anchor, not just a pass-through'),
    l('أضف معلمين أو ثلاثة بحد أقصى', 'Add only two or three extra landmarks at most'),
    l('ثبت وجبة أو قهوة داخل اليوم بوضوح', 'Place one clear meal or coffee stop within the day'),
    l('احتفظ بمرونة لحذف محطة إذا طال البرنامج', 'Keep enough flexibility to remove one stop if the day runs long')
  ]
};

function getCategory(slug: string): keyof typeof defaultDetails {
  return slug.split('/')[0] as keyof typeof defaultDetails;
}

export function getGuideDetail(slug: string): GuideDetail {
  const category = getCategory(slug);
  const defaults = defaultDetails[category];
  return {
    ...defaults,
    checklistTitle: defaults.checklistTitle,
    checklist: checklists[slug] ?? [
      l('راجع التوقيت العام قبل الوصول', 'Review general timing before arriving'),
      l('اختر هدفًا أساسيًا واحدًا لهذه الصفحة', 'Choose one main objective for this page'),
      l('تحقق من أي خدمة تشغيلية مهمة مباشرة', 'Check any critical live service directly'),
      l('اترك مساحة لمرونة الخطة', 'Leave room for flexibility in the plan')
    ]
  };
}

export function localizeDetail(text: LocalizedText, lang: 'ar' | 'en'): string {
  return text[lang];
}
