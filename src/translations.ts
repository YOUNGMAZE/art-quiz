
export type Language = 'en' | 'ru';

export interface Question {
  id: string;
  category: string;
  points: number;
  question: string;
  answer: string;
  isAnswered: boolean;
  imageUrl: string;
}

export const CATEGORIES = {
  en: [
    { name: 'Hidden Details', id: 'hd' },
    { name: 'Architecture', id: 'ar' },
    { name: 'Color in Art', id: 'ca' },
    { name: 'Sculpture', id: 'sc' },
    { name: 'Auction Passions', id: 'ap' },
  ],
  ru: [
    { name: 'Скрытые детали', id: 'hd' },
    { name: 'Архитектура', id: 'ar' },
    { name: 'Цвет в искусстве', id: 'ca' },
    { name: 'Скульптура', id: 'sc' },
    { name: 'Аукционные страсти', id: 'ap' },
  ]
};

export const QUESTIONS_DATA = {
  en: [
    // Hidden Details
    { id: 'hd100', category: 'Hidden Details', points: 100, question: "In the 'Mona Lisa', the subject is missing these facial features, which was long considered a mystery, though they likely just wore off during cleaning.", answer: "Eyebrows", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1544767618-c5ef3d845ad4?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd200', category: 'Hidden Details', points: 200, question: "In 2011, under a microscope, these two Latin letters were found in the right pupil of the Mona Lisa, likely the author's initials.", answer: "LV (Leonardo da Vinci)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1627444211158-b0a70f3f20d6?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd300', category: 'Hidden Details', points: 300, question: "In Rembrandt's 'The Night Watch', a brightly lit girl stands out among the musketeers. This specific bird is attached to her belt.", answer: "Chicken (symbol of the militia)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd400', category: 'Hidden Details', points: 400, question: "Examining Hans Holbein's 'The Ambassadors' from a specific angle reveals that the strange smudge at the bottom is actually a...", answer: "Skull", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd500', category: 'Hidden Details', points: 500, question: "Some researchers see an encoded scene from the Gospel in Van Gogh's 'Café Terrace at Night'. Which one?", answer: "The Last Supper", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop" },
    
    // Architecture
    { id: 'ar100', category: 'Architecture', points: 100, question: "This style, which dominated Europe from the 12th to 15th centuries, got its name from Germanic tribes, though they had nothing to do with it.", answer: "Gothic", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1548560781-a7a07d9d33db?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar200', category: 'Architecture', points: 200, question: "The famous 'Leaning' tower in Pisa is actually part of a cathedral complex. What is the architectural term for such a bell tower?", answer: "Campanile", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1543429776-067bb207185c?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar300', category: 'Architecture', points: 300, question: "Originally built as the Church of Saint Genevieve, this Parisian building eventually became a mausoleum for France's great figures.", answer: "Panthéon", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1590429448256-c3a4405aef75?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar400', category: 'Architecture', points: 400, question: "What is the name for a female figure used as a supporting column in Greek architecture?", answer: "Caryatid", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar500', category: 'Architecture', points: 500, question: "This modernist architect famously stated: 'A house is a machine for living in'.", answer: "Le Corbusier", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },

    // Color in Art
    { id: 'ca100', category: 'Color in Art', points: 100, question: "This color was the most expensive during the Renaissance because it was made from the semi-precious stone lapis lazuli.", answer: "Ultramarine (Blue)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1576444399940-058864005391?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca200', category: 'Color in Art', points: 200, question: "During his 'Blue Period', this artist painted beggars and acrobats in cold tones due to deep depression.", answer: "Pablo Picasso", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca300', category: 'Color in Art', points: 300, question: "Which artist is considered the inventor of 'anthropometry', where he used a patented bright blue shade?", answer: "Yves Klein", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca400', category: 'Color in Art', points: 400, question: "In 1814, due to an error in the paint composition, 'Belshazzar's Feast' by this author began to rapidly blacken. Who is the author?", answer: "Rembrandt", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca500', category: 'Color in Art', points: 500, question: "What is the painting technique where a picture is created from many small dots of pure color?", answer: "Pointillism", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc067985c?q=80&w=800&auto=format&fit=crop" },

    // Sculpture
    { id: 'sc100', category: 'Sculpture', points: 100, question: "This ancient statue lost its arms during a scuffle between French sailors and Turkish authorities on the island of Milos.", answer: "Venus de Milo", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc200', category: 'Sculpture', points: 200, question: "From what material did Michelangelo carve his 'David', considering the block was deemed ruined by a previous master?", answer: "Marble", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc300', category: 'Sculpture', points: 300, question: "Auguste Rodin created this sculpture as part of a large-scale composition called 'The Gates of Hell', inspired by Dante.", answer: "The Thinker", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc400', category: 'Sculpture', points: 400, question: "What is the name of the bronze casting technique where the wax model is melted and drained out?", answer: "Lost-wax casting (Cire perdue)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1508189860359-777d945909ef?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc500', category: 'Sculpture', points: 500, question: "Which 20th-century sculptor is known for his signature 'skinny', elongated human figures?", answer: "Alberto Giacometti", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop" },

    // Auction Passions
    { id: 'ap100', category: 'Auction Passions', points: 100, question: "In 1990, 'Portrait of Dr. Gachet' by this 'mad' Dutchman became the most expensive painting in the world at the time.", answer: "Vincent van Gogh", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap200', category: 'Auction Passions', points: 200, question: "In 2018, a painting by this anonymous artist self-destructed via a hidden shredder immediately after the gavel fell at Sotheby’s.", answer: "Banksy", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap300', category: 'Auction Passions', points: 300, question: "What is the name of the most expensive painting in history, sold for $450 million and attributed to Leonardo da Vinci?", answer: "Salvator Mundi", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap400', category: 'Auction Passions', points: 400, question: "Which series of paintings by Claude Monet, depicting the same location at different times of day, frequently sets auction records?", answer: "Haystacks (or Water Lilies)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap500', category: 'Auction Passions', points: 500, question: "The founder of which major auction house (one of the 'big two') started as a bookseller in 1744?", answer: "Samuel Baker (Sotheby’s)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1518998053574-53ee7961a981?q=80&w=800&auto=format&fit=crop" },
  ],
  ru: [
    // Скрытые детали
    { id: 'hd100', category: 'Скрытые детали', points: 100, question: "На картине «Мона Лиза» у героини отсутствуют именно эти элементы лица, что долгое время считалось загадкой, хотя, скорее всего, они просто стерлись при чистке.", answer: "Брови", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1544767618-c5ef3d845ad4?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd200', category: 'Скрытые детали', points: 200, question: "В 2011 году под микроскопом в правом зрачке Джоконды обнаружили эти две латинские буквы, вероятно, инициалы автора.", answer: "LV (Леонардо да Винчи)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1627444211158-b0a70f3f20d6?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd300', category: 'Скрытые детали', points: 300, question: "На полотне «Ночной дозор» Рембрандта среди толпы суровых мушкетеров выделяется ярко освещенная девочка. К ее поясу прикреплена именно эта птица.", answer: "Курица (символ отряда)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd400', category: 'Скрытые детали', points: 400, question: "Исследование картины «Послы» Ганса Гольбейна под углом открывает, что странное пятно в нижней части картины — это...", answer: "Череп", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=800&auto=format&fit=crop" },
    { id: 'hd500', category: 'Скрытые детали', points: 500, question: "На картине Ван Гога «Ночная терраса кафе» некоторые исследователи видят зашифрованную сцену из Евангелия. Какую именно?", answer: "Тайная вечеря", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop" },
    
    // Архитектура
    { id: 'ar100', category: 'Архитектура', points: 100, question: "Этот стиль, господствовавший в Европе в XII–XV веках, получил свое название от германских племен, хотя они к нему отношения не имели.", answer: "Готика", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1548560781-a7a07d9d33db?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar200', category: 'Архитектура', points: 200, question: "Этот знаменитый «падающий» объект в Пизе на самом деле является не самостоятельным зданием, а частью соборного ансамбля. Как называется такой тип башни?", answer: "Кампанила (колокольня)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1543429776-067bb207185c?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar300', category: 'Архитектура', points: 300, question: "Изначально это здание в Париже строилось как церковь святой Женевьевы, но в итоге стало усыпальницей великих людей Франции.", answer: "Пантеон", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1590429448256-c3a4405aef75?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar400', category: 'Архитектура', points: 400, question: "Как называется верхняя женская часть греческого храма или фигура женщины, заменяющая колонну?", answer: "Кариатида", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800&auto=format&fit=crop" },
    { id: 'ar500', category: 'Архитектура', points: 500, question: "Этот архитектор-модернист сказал: «Дом — это машина для жилья».", answer: "Ле Корбюзье", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },

    // Цвет в искусстве
    { id: 'ca100', category: 'Цвет в искусстве', points: 100, question: "Этот цвет был самым дорогим в эпоху Возрождения, так как его добывали из полудрагоценного камня лазурита.", answer: "Ультрамарин (синий)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1576444399940-058864005391?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca200', category: 'Цвет в искусстве', points: 200, question: "В «голубой период» своего творчества этот художник писал нищих и акробатов в холодных тонах из-за глубокой депрессии.", answer: "Пабло Пикассо", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca300', category: 'Цвет в искусстве', points: 300, question: "Какой художник считается изобретателем «антропометрии», где он использовал запатентованный им ярко-синий оттенок?", answer: "Ив Кляйн", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca400', category: 'Цвет в искусстве', points: 400, question: "В 1814 году из-за ошибки в составе краски картина «Пир Валтасара» этого автора начала стремительно чернеть. Кто автор?", answer: "Рембрандт", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop" },
    { id: 'ca500', category: 'Цвет в искусстве', points: 500, question: "Как называется техника живописи, при которой картина создается из множества мелких точек чистого цвета?", answer: "Пуантилизм", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc067985c?q=80&w=800&auto=format&fit=crop" },

    // Скульптура
    { id: 'sc100', category: 'Скульптура', points: 100, question: "Эта античная статуя лишилась рук во время потасовки между французскими моряками и турецкими властями на острове Милос.", answer: "Венера Милосская", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc200', category: 'Скульптура', points: 200, question: "Из какого материала Микеланджело изваял своего «Давида», если учесть, что глыба считалась испорченной предыдущим мастером?", answer: "Мрамор", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc300', category: 'Скульптура', points: 300, question: "Огюст Роден создал эту скульптуру как часть масштабной композиции «Врата ада», вдохновленной Данте.", answer: "«Мыслитель»", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc400', category: 'Скульптура', points: 400, question: "Как называется техника отливки бронзовых статуй, при которой внутренняя модель из воска расплавляется и вытекает?", answer: "Метод утраченного воска (Cire perdue)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1508189860359-777d945909ef?q=80&w=800&auto=format&fit=crop" },
    { id: 'sc500', category: 'Скульптура', points: 500, question: "Кто из великих скульпторов ХХ века известен своими «тощими», вытянутыми человеческими фигурами?", answer: "Альберто Джакометти", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop" },

    // Аукционные страсти
    { id: 'ap100', category: 'Аукционные страсти', points: 100, question: "Картина этого «безумного» голландца «Портрет доктора Гаше» в 1990 году стала самой дорогой в мире на тот момент.", answer: "Винсент Ван Гог", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap200', category: 'Аукционные страсти', points: 200, question: "В 2018 году картина этого анонимного художника самоуничтожилась с помощью шредера сразу после удара молотка на аукционе Sotheby’s.", answer: "Бэнкси", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap300', category: 'Аукционные страсти', points: 300, question: "Как называется самая дорогая картина в истории, проданная за $450 млн и приписываемая Леонардо да Винчи?", answer: "«Спаситель мира» (Salvator Mundi)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap400', category: 'Аукционные страсти', points: 400, question: "Какая серия картин Клода Моне, изображающая одно и то же место в разное время суток, чаще всего ставит рекорды на торгах?", answer: "«Стога» (или «Кувшинки»)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop" },
    { id: 'ap500', category: 'Аукционные страсти', points: 500, question: "Основатель какого аукционного дома (одного из «большой двойки») начинал как книготорговец в 1744 году?", answer: "Сэмюэл Бейкер (Sotheby’s)", isAnswered: false, imageUrl: "https://images.unsplash.com/photo-1518998053574-53ee7961a981?q=80&w=800&auto=format&fit=crop" },
  ],
};

export const FINAL_QUESTION_DATA = {
  en: {
    question: "Which iconic museum was originally built as a fortress in the 12th century and then used as a royal palace before becoming a public museum during the French Revolution?",
    answer: "The Louvre",
    category: "FINAL ROUND",
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop"
  },
  ru: {
    question: "Какой культовый музей изначально был построен как крепость в XII веке, затем использовался как королевский дворец, а во время Французской революции стал общественным музеем?",
    answer: "Лувр",
    category: "ФИНАЛЬНЫЙ РАУНД",
    imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop"
  }
};

export const UI_STRINGS = {
  en: {
    title: "Art Quest",
    totalScore: "Total Score",
    startExhibition: "Start Exhibition",
    introTitle: "Artistry &",
    introSubtitle: "Intrigue",
    introDesc: "Test your knowledge of the world's most famous masterpieces, architects, and hidden secrets.",
    points: "Points",
    revealAnswer: "Reveal Answer",
    correct: "Correct",
    incorrect: "Incorrect",
    finalRound: "ENTER FINAL ROUND",
    finalTitle: "The Final Gallery",
    finalSubtitle: "For Eternal Glory",
    showMasterpiece: "SHOW THE MASTERPIECE",
    finishExhibition: "Finish Exhibition",
    playAgain: "Play Again",
    finalScoreLabel: "Final Score",
    answerLabel: "Answer"
  },
  ru: {
    title: "Арт-Квест",
    totalScore: "Общий счет",
    startExhibition: "Начать выставку",
    introTitle: "Искусство &",
    introSubtitle: "Интриги",
    introDesc: "Проверьте свои знания о самых знаменитых шедеврах мира, архитекторах и скрытых тайнах.",
    points: "Очков",
    revealAnswer: "Показать ответ",
    correct: "Верно",
    incorrect: "Неверно",
    finalRound: "ПЕРЕЙТИ К ФИНАЛУ",
    finalTitle: "Финальная Галерея",
    finalSubtitle: "Ради вечной славы",
    showMasterpiece: "ПОКАЗАТЬ ШЕДЕВР",
    finishExhibition: "Завершить выставку",
    playAgain: "Играть снова",
    finalScoreLabel: "Итоговый счет",
    answerLabel: "Ответ"
  }
};
