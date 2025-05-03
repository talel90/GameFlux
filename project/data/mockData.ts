import { Article, ArticleCategory, Game, Review } from '@/types/article';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Elder Scrolls 6: Everything We Know So Far',
    summary: 'Bethesda has been tight-lipped about The Elder Scrolls 6, but here\'s what we\'ve gathered from various sources.',
    content: 'After the massive success of Skyrim, fans have been eagerly awaiting news about the next installment in The Elder Scrolls series. While Bethesda has been focusing on Starfield, they\'ve dropped some hints about TES6. The game is likely set in Hammerfell, homeland of the Redguards, and will feature a completely revamped engine with next-gen graphics and physics. The release is still several years away, but the anticipation continues to build.',
    author: 'Jane Smith',
    publishDate: '2025-06-12',
    readTime: 5,
    imageUrl: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    category: ArticleCategory.NEWS,
    tags: ['elder scrolls', 'bethesda', 'rpg', 'upcoming'],
    likes: 342,
    comments: 87,
    isBookmarked: true
  },
  {
    id: '2',
    title: 'Unreal Engine 6 Announced with Revolutionary AI Features',
    summary: 'Epic Games unveils the next generation of its game engine with groundbreaking AI tools for developers.',
    content: 'Epic Games has officially announced Unreal Engine 6, and it\'s set to revolutionize game development once again. The new engine includes advanced AI tools that can generate realistic environments, characters, and even basic gameplay scenarios based on simple text prompts. This could drastically reduce development time and costs for studios of all sizes. Other features include volumetric fog that reacts realistically to movement, advanced global illumination, and improved support for open worlds. Early adopters are already praising its performance improvements and scalability across platforms.',
    author: 'Michael Johnson',
    publishDate: '2025-06-10',
    readTime: 7,
    imageUrl: 'https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg',
    category: ArticleCategory.NEWS,
    tags: ['unreal engine', 'epic games', 'game development', 'ai'],
    likes: 523,
    comments: 134
  },
  {
    id: '3',
    title: 'Elden Ring DLC \"Shadow of the Erdtree\" Shatters Sales Records',
    summary: 'FromSoftware\'s much-anticipated expansion has become the fastest-selling DLC of all time.',
    content: 'FromSoftware\'s "Shadow of the Erdtree" DLC for Elden Ring has broken all previous records for DLC sales, moving over 10 million copies in its first week. The expansion, which adds a massive new area to the already enormous game world, has been praised for its challenging boss fights and intricate level design. Critics are calling it "even better than the base game" and "a masterclass in expansion design." Players have been particularly impressed with the new weapons and magic systems that add fresh strategies to the gameplay.',
    author: 'Alex Chen',
    publishDate: '2025-06-08',
    readTime: 4,
    imageUrl: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg',
    category: ArticleCategory.NEWS,
    tags: ['elden ring', 'from software', 'dlc', 'sales'],
    likes: 876,
    comments: 259
  },
  {
    id: '4',
    title: 'How Grand Theft Auto 6 Is Redefining Open-World Games',
    summary: 'GTA 6 is taking the open-world genre to new heights with its revolutionary systems and technology.',
    content: 'Rockstar\'s Grand Theft Auto 6 isn\'t just another sequel—it\'s a complete reimagining of what open-world games can be. With its dynamic weather systems that affect gameplay, incredibly detailed NPC routines, and buildings with fully modeled interiors, the game represents a quantum leap for the genre. The much-discussed "living economy" system means that player actions can affect everything from real estate prices to the types of vehicles and pedestrians in different areas. Early access previews suggest that these aren\'t just marketing claims but genuine innovations that make the world feel more alive than any game before it.',
    author: 'Sarah Williams',
    publishDate: '2025-06-05',
    readTime: 9,
    imageUrl: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg',
    category: ArticleCategory.FEATURE,
    tags: ['gta 6', 'rockstar', 'open world', 'next gen'],
    likes: 1243,
    comments: 367
  },
  {
    id: '5',
    title: 'The Last of Us Part III Confirmed by Naughty Dog',
    summary: 'Neil Druckmann announces that development has begun on the third installment in the acclaimed series.',
    content: 'After years of speculation, Naughty Dog has officially confirmed that The Last of Us Part III is in development. Creative director Neil Druckmann revealed that the story will take place several years after the events of Part II and will explore themes of redemption and reconciliation. While he was careful not to reveal plot details, he hinted that both familiar and new characters will feature prominently. The game is being developed exclusively for PlayStation 6 and will showcase the console\'s advanced haptic feedback systems and 3D audio capabilities. No release window has been announced, but industry insiders suggest a 2027 launch is likely.',
    author: 'David Kim',
    publishDate: '2025-06-02',
    readTime: 6,
    imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    category: ArticleCategory.NEWS,
    tags: ['the last of us', 'naughty dog', 'playstation', 'sequel'],
    likes: 2156,
    comments: 543
  },
  {
    id: '6',
    title: 'Hollow Knight: Silksong Review - An Instant Masterpiece',
    summary: 'Team Cherry\'s long-awaited sequel delivers on every front with stunning artistry and challenging gameplay.',
    content: 'After years of patient waiting, Hollow Knight: Silksong has finally arrived, and it was worth every second of anticipation. Team Cherry has crafted a sequel that honors the original while boldly charting new territory. Playing as Hornet brings a completely different feel to combat with her speed and agility contrasting sharply with the Knight\'s methodical approach. The new kingdom of Pharloom is breathtakingly designed, with each area visually distinct and filled with secrets that reward exploration. The difficulty remains high, with boss fights that will challenge even veteran players, but the refined movement system makes every encounter feel fair. With its haunting score, gorgeous hand-drawn art, and emotionally resonant story, Silksong isn\'t just one of the best metroidvanias ever made—it\'s one of the best games of the year.',
    author: 'Ryan Park',
    publishDate: '2025-05-29',
    readTime: 8,
    imageUrl: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg',
    category: ArticleCategory.REVIEW,
    tags: ['hollow knight', 'silksong', 'metroidvania', 'indie', 'review'],
    likes: 1756,
    comments: 421,
    isBookmarked: true
  }
];

export const upcomingGames: Game[] = [
  {
    id: '1',
    title: 'Star Wars: Outlaws',
    developer: 'Massive Entertainment',
    publisher: 'Ubisoft',
    releaseDate: '2025-08-30',
    platforms: ['PS5', 'Xbox Series X|S', 'PC'],
    genres: ['Action-Adventure', 'Open World'],
    rating: 0,
    imageUrl: 'https://images.pexels.com/photos/6498294/pexels-photo-6498294.jpeg',
    coverImageUrl: 'https://images.pexels.com/photos/6498294/pexels-photo-6498294.jpeg',
    description: 'Set between The Empire Strikes Back and Return of the Jedi, play as Kay Vess, a scoundrel seeking freedom and the means to start a new life, along with her companion Nix.'
  },
  {
    id: '2',
    title: 'Fable',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    releaseDate: '2025-11-15',
    platforms: ['Xbox Series X|S', 'PC'],
    genres: ['RPG', 'Fantasy'],
    rating: 0,
    imageUrl: 'https://images.pexels.com/photos/6621171/pexels-photo-6621171.jpeg',
    coverImageUrl: 'https://images.pexels.com/photos/6621171/pexels-photo-6621171.jpeg',
    description: 'A new beginning for the legendary RPG series, Fable returns with a reimagining of the franchise, promising to take players to a fantastical world where they can tell their own story.'
  },
  {
    id: '3',
    title: 'Perfect Dark',
    developer: 'The Initiative',
    publisher: 'Xbox Game Studios',
    releaseDate: '2026-03-21',
    platforms: ['Xbox Series X|S', 'PC'],
    genres: ['First-Person Shooter', 'Stealth'],
    rating: 0,
    imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    coverImageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    description: 'A revival of the classic shooter with a contemporary vision, featuring secret agent Joanna Dark in a near-future world filled with corporate conspiracies and advanced technology.'
  }
];

export const popularReviews: Review[] = [
  {
    id: '1',
    gameId: '101',
    title: 'Final Fantasy 7 Rebirth',
    summary: 'An ambitious sequel that expands on Remake\'s foundation with a vast open world and emotional storytelling.',
    content: 'Square Enix continues its ambitious reimagining of the 1997 classic with Final Fantasy 7 Rebirth, the second entry in the planned trilogy. The game picks up right where Remake left off, with Cloud and his companions venturing beyond the dystopian confines of Midgar into a vast open world. The combat system has been refined and expanded, offering deeper strategic options while maintaining the exciting blend of real-time action and tactical command-based inputs. New mini-games and side activities provide enjoyable diversions from the main quest, with the chocobo racing and breeding systems being particular highlights. The controversial changes to the original storyline continue here, with new characters and plot developments that will surprise even veteran fans. While the pacing occasionally suffers in the middle chapters, the emotional high points hit harder than ever, especially for those invested in these characters. Visually stunning and featuring another exceptional soundtrack, Rebirth successfully builds on Remake\'s foundation while charting its own course.',
    author: 'Emily Chen',
    publishDate: '2025-03-15',
    rating: 9.2,
    pros: [
      'Gorgeous visuals and environments',
      'Expanded and refined combat system',
      'Emotional storytelling with surprising twists',
      'Excellent voice acting and soundtrack'
    ],
    cons: [
      'Some pacing issues in middle chapters',
      'Side quests vary in quality',
      'Story changes may divide fans of the original'
    ],
    imageUrl: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg'
  },
  {
    id: '2',
    gameId: '102',
    title: 'Metaphor: ReFantazio',
    summary: 'Atlus delivers another JRPG masterpiece with innovative systems and a thought-provoking story.',
    content: 'From the creative minds behind Persona and Shin Megami Tensei comes Metaphor: ReFantazio, a fresh JRPG that both honors Atlus\' legacy and pushes the genre forward. Set in a unique fantasy world where thoughts and beliefs physically manifest, the game blends traditional medieval fantasy with surreal psychological elements. The turn-based combat builds on Atlus\' established strengths but introduces the innovative "Archetype" system, allowing characters to transform based on inner ideals and convictions. The social simulation aspects will feel familiar to Persona fans but have been reimagined to fit the fantasy setting, with well-written characters that grow and change based on your interactions. The game tackles complex themes of truth, perception, and societal values with the nuance and depth Atlus is known for. With stunning art direction, a phenomenal soundtrack by Shoji Meguro, and a lengthy campaign that rewards multiple playthroughs, Metaphor: ReFantazio stands as one of the finest JRPGs of this generation.',
    author: 'Marcus Johnson',
    publishDate: '2025-02-28',
    rating: 9.5,
    pros: [
      'Innovative Archetype system with deep customization',
      'Complex, thought-provoking story',
      'Gorgeous art direction and character designs',
      'Excellent soundtrack'
    ],
    cons: [
      'Some early-game tutorials feel overwhelming',
      'Difficulty spikes in certain dungeons',
      'Time management systems can be stressful for completionists'
    ],
    imageUrl: 'https://images.pexels.com/photos/6498300/pexels-photo-6498300.jpeg'
  },
  {
    id: '3',
    gameId: '103',
    title: 'Avowed',
    summary: 'Obsidian\'s first-person RPG set in the Pillars of Eternity universe delivers deep choices and consequences.',
    content: 'Obsidian Entertainment returns to the world of Eora with Avowed, a first-person RPG set in the same universe as their acclaimed Pillars of Eternity series. Rather than attempting to compete directly with Bethesda\'s open-world formula, Obsidian has opted for a more focused experience, with densely packed regions filled with meaningful content instead of vast empty spaces. The narrative shines with the studio\'s trademark writing quality, offering complex moral choices with far-reaching consequences that genuinely affect both the story and gameplay. The dual-wielding combat system successfully translates the rich spell and ability systems from Pillars into a visceral first-person experience, though melee combat occasionally feels less refined than its magical counterpart. While technical issues and some performance hitches detract from the experience, particularly on console versions, the rich worldbuilding, compelling characters, and Obsidian\'s unmatched talent for reactive storytelling make Avowed a standout RPG that honors its isometric roots while finding its own identity.',
    author: 'Sophia Martinez',
    publishDate: '2025-01-18',
    rating: 8.7,
    pros: [
      'Rich, reactive storytelling with meaningful choices',
      'Deep character customization and progression',
      'Excellent world-building that expands on Pillars lore',
      'Impressive magical combat options'
    ],
    cons: [
      'Technical issues and performance problems',
      'Melee combat feels less refined than spellcasting',
      'Some companion quests feel underdeveloped'
    ],
    imageUrl: 'https://images.pexels.com/photos/7809123/pexels-photo-7809123.jpeg'
  }
];