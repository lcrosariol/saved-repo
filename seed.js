
require("dotenv").config();
require("./config/database");

const Category = require("./models/category");
const Item = require("./models/item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Brassicaceae (Brassica)", sortOrder: 10 },
    { name: "Curcubitaceae (Cucurbit)", sortOrder: 20 },
    { name: "Leguminosae (Legume)", sortOrder: 30 },
    { name: "Solanaceae (Nightshade)", sortOrder: 40 },
    { name: "Umbelliferae(Parsley)", sortOrder: 50 },
    { name: "Poaceae (Corn)", sortOrder: 60 },
    { name: "Alliums (Onion)", sortOrder: 70 },
    { name: "Amaranthaceae (Goosefoot)", sortOrder: 80 },
    { name: "Asteraceae (Sunflower)", sortOrder: 90 },
    { name: "Farm Fresh Eggs", sortOrder: 100 },

  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Radish Daikon",
      photo: "https://i.imgur.com/Fep1buR.jpg",
      category: categories[0],
      info: "Raphanus sativus.  As its name suggests, this popular daikon type radish can be sown year-round in milder climates. Its flavorful, spicy, crisp flesh tastes great when tossed into salads or soups, pickled, or eaten fresh. Very slow to bolt, this variety produces a white root that reaches 10-14in in length and 2in in diameter, tapering uniformly to a sharp tip. 50-60 days. Direct Seed: 1in apart. Seed Depth: 1/2in. Rows apart: 12in. Thin 2-3in apart.",
    },
    {
      name: "Radish Scarlet Globe",
      photo: "https://i.imgur.com/hHLlt0L.jpg",
      category: categories[0],
      info: "Raphanus sativus. Early forcing radish for home or market gardeners, good for bunching. One-inch globes with bright red skin and white flesh. A sure cropper. Plant in the spring or fall. 20-28 days. Direct seed: 1 in apart. Seed Depth: 1/2in. Rows apart: 12in. Thin: 2-3in apart.  ",
    },
    {
      name: "French Breakfast Radish",
      photo: "https://i.imgur.com/Pb8P28I.jpg",
      category: categories[0],
      info: "Raphanus sativus.  (aka Radis Demi-long Rose a Bout Blanc) A very early market garden radish of French origin. Listed by J.M. Thorburn & Co of New York in 1870. Oblong and blunt, rose-scarlet with a white tip. White crisp flesh with a mildly pungent flavor. Sow in the spring or fall and pick when small. 20-30 days.  Direct seed: 1in apart. Seep depth: 1/2in.  Rows apart: 12in.  Thin: 2-3in apart. ",
    },
    {
      name: "Kohlrabi Purple",
      photo: "https://i.imgur.com/pAZE8lP.jpg",
      category: categories[0],
      info: "(Brassica oleracea) (aka Early Purple Vienna, Di Vienna Violetto) Purple-skinned above ground bulbs with crisp white flesh. Sweet turnip-like flavor. Excellent raw or steamed. Best harvested at 2½in diameter. Slightly larger and later than White Vienna. 55-70 days Direct Seed: 1in apart.  Seed depth: 1/4in.  Rows apart: 12-18in.  Thin: 4in apart. ",
    },
    {
      name: "Kohlrabli White",
      photo: "https://i.imgur.com/uL5Uwkx.jpg",
      category: categories[0],
      info: "(Brassica oleracea) (aka Early White Vienna, Di Vienna Bianco) Pre-1860 variety. Pale green above ground globes with crisp white flesh. Sweet and mild with a flavor reminiscent of turnips. Best harvested at 2½in diameter. Excellent raw or steamed. 50-65 days. Direct Seed: 1in apart.  Seed depth: 1/4in.  Rows apart: 12-18in.  Thin: 4in apart. ",
    },
    {
      name: "Brocolli",
      photo: "https://i.imgur.com/TIAo4tG.jpg",
      category: categories[0],
      info: "Brassica oleracea.  This historic and delicious variety dates back to the 1880s, when it was brought to America by Italian immigrants. Tight heads can grow up to 8in in diameter. After the central head is harvested, many side shoots will form, and they can be harvested right up to frost. 58-90 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Brocolli Romanesco",
      photo: "https://i.imgur.com/X5SWF1O.jpg",
      category: categories[0],
      info: "Brassica oleracea. As beautiful in the garden as on the table, Romanesco produces stunning apple-green whorled heads with a highly refined taste and texture. Widely grown and prized in Italy, it grows exceptionally well in cool northern areas of the country. 75-100 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Cauliflower White",
      photo: "https://i.imgur.com/eKygvAf.jpg",
      category: categories[0],
      info: "Brassica oleracea. Smooth 6-7in heads of tightly formed white curds are solid, crisp, and tender. This variety is well-suited to being eaten raw, baked, roasted, or steamed. Can be overwintered for an early crop in warmer regions. Introduced to American gardeners in 1878 by Peter Henderson & Company. 60-85 days from transplant. Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Brussel Sprouts",
      photo: "https://i.imgur.com/z2yIPPw.jpg",
      category: categories[0],
      info: "Brassica oleracea. A single stalk of this variety can bear 50-100 dark-green Brussels sprouts (florets) over an extended period. Compact plants produce sturdy spikes with edible florets that mature from the bottom up and take on sweeter tones after a light frost. Toward the end of the growing season, cut off the top 4-6 inches of the plant to force it to put it's energy into the existing sprouts; the remaining sprouts should mature in 3-6 weeks. Introduced in the 1890s, this historic variety was once the most important commercial sprout in the United States. Brussels sprouts mature 80-115 days from transplant. Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Dinosaur Kale",
      photo: "https://i.imgur.com/19evpMu.jpg",
      category: categories[0],
      info: "Brassica oleracea. (aka Dinosaur, Nero di Toscana) Italian kale which reportedly dates back to the 18th century. Blue-green strap-like leaves are 3in wide by 10-18in long with a heavily savoyed texture. Excellent flavor that is enhanced by frost. Best eaten when leaves are small and tender. 62 days from transplant. Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Green Curly Kale",
      photo: "https://i.imgur.com/BcXT2aU.jpg",
      category: categories[0],
      info: "Brassica oleracea. Gorgeous finely curled blue-green leaves hold their color even in severe cold. Uniform low-growing plants are 15in tall with a 20-35in spread. Very hardy; will overwinter with mulch in zones 4-5. Ornamental and delicious. High in vitamin A. 53-65 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Red Curly Kale",
      photo: "https://i.imgur.com/x5zCkYx.jpg",
      category: categories[0],
      info: "Brassica oleracea. Remarkably attractive dark green kale with red veined, frilly, tightly curled leaves. A vigorous performer with good cold tolerance. Leaves darken to deep scarlet in late season. Begin harvesting leaves when young, and allow plant to grow well into the early winter. 24-36in tall by 24in wide, 60 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Red Cabbage",
      photo: "https://i.imgur.com/tlcuRCI.jpg",
      category: categories[0],
      info: "Brassica oleracea This beautiful Eastern European variety bears elongated, red cabbages framed by greenish-red outer foliage. The leaves of these dense 2-3 pound heads have a sweetness that makes them perfect for slaws and salads, or for use in pickling. A good keeper that adds an ornamental quality to the vegetable garden. 80 days from transplant.24-36in tall by 24in wide, 60 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Red Curly Cabbage",
      photo: "https://i.imgur.com/YDCUQ9T.jpg",
      category: categories[0],
      info: "Brassica oleracea This beautiful Eastern European variety bears elongated, red cabbages framed by greenish-red outer foliage. The leaves of these dense 2-3 pound heads have a sweetness that makes them perfect for slaws and salads, or for use in pickling. A good keeper that adds an ornamental quality to the vegetable garden. 80 days from transplant.24-36in tall by 24in wide, 60 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    {
      name: "Curly Cabbage",
      photo: "https://i.imgur.com/4zP1owI.jpg",
      category: categories[0],
      info: "Brassica oleracea This beautiful Eastern European variety bears elongated, red cabbages framed by greenish-red outer foliage. The leaves of these dense 2-3 pound heads have a sweetness that makes them perfect for slaws and salads, or for use in pickling. A good keeper that adds an ornamental quality to the vegetable garden. 80 days from transplant.24-36in tall by 24in wide, 60 days from transplant.  Start indoors: 6-8 weeks before last frost.  Germination: 3-10 days.  Plant outdoors: 24in apart. Light: full sun.  ",
    },
    ,
    {
      name: "Assorted Decorational Gourds",
      photo: "https://i.imgur.com/GzmThEa.jpg",
      category: categories[1],
      info: "(Cucurbita pepo) A great mixture of winged brightly colored gourds. One of the most diverse ornamentals. Easy to grow and durable. 90-100 days. Direct seed: 1in deep. Seeds to hill: 6-8.  Thin: 3-4 plants. Light: full sun.",
    },
    {
      name: "Zuchinni",
      photo: "https://i.imgur.com/Fc2NS1A.jpg",
      category: categories[1],
      info: "(Cucurbita pepo) A 1957 All America Selections winner developed by John Scarchuk at the Connecticut Agricultural Experiment Station. Compact everbearing bush plants are loaded with glossy green-black fruits with firm white flesh. Best eaten when under 8in long. Excellent variety for freezing. 45-65 days. Direct seed: 1in deep. Seeds to hill: 6-8.  Thin: 3-4 plants. Light: full sun.",
    },
    {
      name: "Pumpkin GIANT",
      photo: "https://i.imgur.com/XN1v2Ii.jpg",
      category: categories[1],
      info: "(Cucurbita pepo) A very large pumpkin.  120 days. Direct seed: 1in deep. Seeds to hill: 6-8.  Thin: 3-4 plants. Light: full sun.",
    },
    {
      name: "Cucumber Pickling",
      photo: "https://i.imgur.com/mJiAiJZ.jpg",
      category: categories[1],
      info: "(Cucurbita pepo) Also known as Ace. Uniformly straight 10in fruits hold their dark-green color for a long time. Very productive and a good choice for pickling, as the name suggests. Excellent variety for home or market gardens. Best picked when 4-6in long. Introduced in 1928 by Abbott & Cobb of Philadelphia, Pennsylvania. 50-55 days. Direct seed: 1in deep. Seeds to hill: 6-8.  Thin: 3-4 plants. Light: full sun.",
    },
    {
      name: "Yellow Squash",
      photo: "https://i.imgur.com/kXKrvLp.jpg",
      category: categories[1],
      info: "(Cucurbita pepo) Introduced in 1973 by W. Atlee Burpee of Philadelphia, bred from squash varieties supplied by Dr. Oved Shifress. This vivid yellow fruit was the first commercial B (bicolor gene) cultivar. Crisp and mild-flavored zucchinis are borne prolifically on bush plants. 50-55 days. Direct seed: 1in deep. Seeds to hill: 6-8.  Thin: 3-4 plants. Light: full sun.",
    },
    {
      name: "Watermelon Oranglow",
      photo: "https://i.imgur.com/rO9JCuY.jpg",
      category: categories[1],
      info: "An extraordinary watermelon offered by the Willhite Seed Company in the early 1960s. Fiery orange flesh is sugary, delicious, and crisp. Large oblong fruits average 25 pounds. A reliable producer and Heritage Farm favorite. 90-100 days.",
    },
    {
      name: "Watermelon Seedless Red",
      photo: "https://i.imgur.com/aSGx6rU.jpg",
      category: categories[1],
      info: "This watermelon came to SSE from Virdie Smith of Gladwater, Texas. The highly productive plants bear many medium sized fruits with striped rinds and a high sugar content.  It is possible that the watermelon originated in Africa and that it was cultivated in the Nile Valley as early as the 2nd millennium BCE and is mentioned in the Bible.  Later the watermelon was brought to India and China before being brought to Europe. It was brought to North America by European colonists and African slaves.",
    },
    {
      name: "French Green Bean",
      photo: "https://i.imgur.com/2VXVWka.jpg",
      category: categories[2],
      info: "The beans of this historic variety are excellent for fresh eating—especially when picked young and tender—and its vines bear beautiful lilac flowers. Sweet and flavorful off the vine (kids love them!), the snappy, green 4-7in pods cradle shiny, dark-purple seeds when mature. Ever popular, it was once the most widely grown French climbing bean in England, according to The Beans of New York (1931). Pole habit, snap, 65-75 days.",
    },
    {
      name: "Cranberry Bean",
      photo: "https://i.imgur.com/mW9EU1w.jpg",
      category: categories[2],
      info: "With exceptionally crisp and juicy pods, this Dutch wax bean bears large 6-8in cream-colored pods with vivid purple mottling that fades when beans are cooked. Pods are stringless and wide. Compact, high-yielding plants. Bush habit, wax, 55-60 days.",
    },
    {
      name: "Yellow Wax Bean",
      photo: "https://i.imgur.com/iHOye7t.jpg",
      category: categories[2],
      info: "This old-time favorite, introduced in 1900, is regaled for its quality and delicious wax bean flavor. The stringless pods reach 5-7in long on heavy-producing plants that grow 15-20in tall. Ideal for freezing or canning. Bush habit, wax, 50-65 days.",
    },
    {
      name: "Potato Mixed",
      photo: "https://i.imgur.com/egSkTPL.jpg",
      category: categories[3],
      info: "A mixture of potatoes.",
    },
    {
      name: "Red Potato",
      photo: "https://i.imgur.com/fcg9EBV.jpg",
      category: categories[3],
      info: "A red potato.",
    },
    {
      name: "Purple Potato",
      photo: "https://i.imgur.com/KDiP4UY.jpg",
      category: categories[3],
      info: "A bright purple waxy type potato.",
    },
    {
      name: "Russet Potato",
      photo: "https://i.imgur.com/JdgMFkE.jpg",
      category: categories[3],
      info: "A large mealy type potato.",
    },
    {
      name: "Brandywine Tomato",
      photo: "https://i.imgur.com/0YXOHJa.jpg",
      category: categories[3],
      info: "(aka Red Brandywine) The original Brandywine introduced by Johnson and Stokes in 1889 from seeds they received from a customer in Ohio. Named after Brandywine Creek in Chester County, Pennsylvania. Large vines produce deep red 8-12 ounce fruits. Excellent flavor. Very productive. Indeterminate, 80 days from transplant.",
    },
    {
      name: "Cherokee Purple Tomato",
      photo: "https://i.imgur.com/Uut2xql.jpg",
      category: categories[3],
      info: "Introduced by North Carolina SSE member Craig LeHoullier in 1991 from seed obtained from J. D. Green of Tennessee. Uniquely colored dusty rose-brown fruits weigh up to 12 ounces. Delicious sweet flesh. Indeterminate, 75-90 days from transplant.",
    },
    {
      name: "Sweet 100 Cherry Tomato",
      photo: "https://i.imgur.com/TBgJNBR.jpg",
      category: categories[3],
      info: "Sweetest cherry tomato, helped Lauren Crosariol win the Naturesweet Small Tomato Grower Homegrown Challenge in 2018.",
    },
    {
      name: "Roma Tomato",
      photo: "https://i.imgur.com/AYjV6tw.jpg",
      category: categories[3],
      info: "Italian variety with pretty rugose (puckered) foliage. Very heavy set of mild 2-3 ounce fruits perfectly suited for making sauce, salsa, and paste. Tends to fall off the vine when fully ripe. Determinate, but requires trellis, 75 days from transplant.",
    },
    {
      name: "Eggplant Purple",
      photo: "https://i.imgur.com/RtNqHgh.jpg",
      category: categories[3],
      info: "This prolific eggplant was a standard market variety bred in Florida in the early 1900s for the commercial trade. Vigorous, upright, well-branched plants bear high-quality fruits continuously throughout the season, and its large purple-black pear-shaped eggplants are held high off the ground. Disease- and drought-resistant. 75-85 days from transplant.",
    },
    {
      name: "Eggplant Lista De Gandia",
      photo: "https://i.imgur.com/c9d90K9.jpg",
      category: categories[3],
      info: "Listada de Gandia is a treasure. This prized variety bears sweet, tender, thin-skinned, stunning eggplant. It likely originated in Spain (its name translates as “Grown in Spain”), where it is still revered today. The small 14in plants produce heavy yields of high-quality, 8in oval white fruits with purple stripes and mild white flesh. The variety thrives in very hot weather. 80-90 days from transplant. ",
    },
    {
      name: "Anaheim Pepper",
      photo: "https://i.imgur.com/mGOTFVb.jpg",
      category: categories[3],
      info: "Not too hot but not sweet either... i think.",
    },
    {
      name: "Thai Chili Pepper",
      photo: "https://i.imgur.com/LFy1R28.jpg",
      category: categories[3],
      info: "DO NOT EAT.  Unless you are a masochist.",
    },
    {
      name: "Green Bell Pepper",
      photo: "https://i.imgur.com/wVVGG8g.jpg",
      category: categories[3],
      info: "Large blocky bell pepper from Italy. Green peppers ripen very slowly to golden-yellow. Thick crisp flesh with delicious sweet spicy flavor when either green or yellow. 70-80 days from transplant. Sweet.",
    },
    {
      name: "Red Bell Pepper",
      photo: "https://i.imgur.com/H8zfKTl.jpg",
      category: categories[3],
      info: "The best red bell pepper we know for northern gardeners where the seasons are cool and short. Blocky uniform fruits are excellent for stuffing or fresh eating. Great sweet flavor. Our stock is from Fedco Seeds in Waterville, Maine. 70 days from transplant.",
    },
    {
      name: "Mixed Bell",
      photo: "https://i.imgur.com/zYUZeFL.jpg",
      category: categories[3],
      info: "A mixed assortment of bell peppers.",
    },

    {
      name: "Celery",
      photo: "https://i.imgur.com/1y4MNPD.jpg",
      category: categories[4],
      info: "The crisp, stringless 12in stalks of this variety impart a light, refreshing flavor to soups and stocks. The vigorous 24-30in plants have deep-green leaves, light-green stalks, and compact hearts. Biennial, 100 days.",
    },
    {
      name: "Carrot Scarlet Nantes",
      photo: "https://i.imgur.com/fROipYH.jpg",
      category: categories[4],
      info: "Also known as Early Coreless, this variety stores well and adapts well to different conditions. Its cylindrical roots are 7in long with blunt tips, and its fine-grained, bright red-orange flesh is nearly coreless, offering great flavor that’s sweet and crisp. Good when used as baby carrots, and excellent for freezing and juicing. Dating to the 1850s, the variety was developed in France by the seed company Vilmorin-Andrieux. 65-75 day. Direct Seed: 1/2in. Apart Seed Depth: 1/4in. Rows Apart: 16-24in. Thin: 2-4in apart.",
    },
    {
      name: "Carrot Mix",
      photo: "https://i.imgur.com/9gduJAS.jpg",
      category: categories[4],
      info: "Lovely mix of carrot varieties.",
    },
    {
      name: "Dill",
      photo: "https://i.imgur.com/VO2Cue3.jpg",
      category: categories[4],
      info: "(Anethum graveolens) This widely grown dill variety is a prolific producer of edible flowers, leaves, and seeds, all of which can be used for flavoring everything from pickles and salads to sauces and condiments. Early-maturing plants have dark-green leaves, 6in flowering umbels, and an intoxicating scent. 45-55 days to leaf harvest, 70-90 days to seed harvest.",
    },
    {
      name: "Cilantro",
      photo: "https://i.imgur.com/tGbGt8C.jpg",
      category: categories[4],
      info: "(Coriandrum sativum) The fresh leaves of this herb, commonly known as cilantro, are used in a variety of Asian and Latin cuisines, but its seeds are also collected and used as a spice called coriander. Successive sowings of this annual herb, which bears umbels of white flowers before it sets seed, will ensure a steady supply of its edible leaves throughout the season. 50-55 days to first leaf harvest, 90-120 days for seed. Annual, 1-2ft tall.",
    },
    {
      name: "Parsley",
      photo: "https://i.imgur.com/sPligv2.jpg",
      category: categories[4],
      info: "(Petroselinum hortensis) Closely curled dark green leaves. Fast growing uniform strain. High in vitamins and minerals. Holds for a long time at harvesting stage even in warm weather. Biennial in zones 6-9, grown as an annual. 68-75 days.",
    },
    {
      name: "Cumin",
      photo: "https://i.imgur.com/nTy8Y8j.jpg",
      category: categories[4],
      info: "(Cuminum cyminum) Native to Egypt. Low-growing plant seldom exceeding 6in in height. Seeds are used as a flavoring in soups, stews, curry powder, and pastries and are still being used in the manufacture of some liqueurs. Self-seeding annual.",
    },
    {
      name: "Fennel",
      photo: "https://i.imgur.com/Qlk2hHq.jpg",
      category: categories[4],
      info: "(F. vulgare) Called finnocchio in Italy, this fennel variety has broad overlapping leaves that form a large, edible, bulb-like base below its celery-like stalks. The bulb and stalks, as well as the feathery, dill-like leaves that top this 3ft tall plant, have a mild licorice or anise flavor. This tender perennial grown as an annual prospers when given a steady supply of moisture.",
    },

    {
      name: "Little Gem",
      photo: "https://i.imgur.com/b74HjZl.jpg",
      category: categories[5],
      info: "Beautiful rainbow corn.",
    },
    {
      name: "Golden Bantam",
      photo: "https://i.imgur.com/bPVSKA5.jpg",
      category: categories[5],
      info: "Producing an early crop for home gardeners and market growers, this historic variety has an excellent sweet flavor and is ideal for freezing and fresh eating. The original strain of Golden Bantam was introduced by W. Atlee Burpee in 1902, and this improved strain was selected for even longer ears and greater tenderness. 70-85 days.",
    },
    {
      name: "Aunt Mary's",
      photo: "https://i.imgur.com/OFOXXqY.jpg",
      category: categories[5],
      info: "Once promoted as “the best white sweet corn in the world,” this hardy mid-season variety bears one to two ears on stalks that reach 7-8in long. Plants grow 6-8ft tall and produce ears with large kernels that, when cooked, have a creamy consistency and range in sweetness by ear. Named for Mary Atkinson of London, Ohio, this variety is believed to have been stewarded by the Atkinson family since before 1850; it was donated to Seed Savers Exchange in the early 1980s by W.W. Williams. Organic.",
    },
    {
      name: "Blue Jade Corn",
      photo: "https://i.imgur.com/7zqthsD.jpg",
      category: categories[5],
      info: "One of the only sweet corns that can be grown in containers, the 3-foot-tall plants of this variety bear 3-6 ears. Peak time for eating is when kernels are just turning blue, but can be eaten when white or steel blue. This variety is from Dutch seedsman and Seed Savers Exchange member Kees Sahin. 70-80 days.",
    },
    {
      name: "Red Onion",
      photo: "https://i.imgur.com/dkKKpje.jpg",
      category: categories[6],
      info: "Beautiful burgundy skin gives this large, firm, sweet onion its name. Perfect for storing, this long-day onion lasts up to 6 months. Reliable plants yield crunchy, aromatic bulbs. 120 days.",
    },
    {
      name: "Yellow Onion",
      photo: "https://i.imgur.com/iuGTGdw.jpg",
      category: categories[6],
      info: "A top-quality, late-maturing onion with golden, globe-shaped bulbs weighing an average of 1 pound, this variety hails from northern Italy. It has a mild, sweet taste when fresh, but its flavor intensifies when it is stored. One of the best onions varieties for storage. Long-day type. 110 days from transplant.",
    },
    {
      name: "White Onion",
      photo: "https://i.imgur.com/yrp9wXt.jpg",
      category: categories[6],
      info: "Large, round bulbs boast sweet, mild, juicy flesh. Famous for its mild flavor, this long-day sweet onion is the only northern onion ever to match the quality of the popular Vidalia types. Well-grown bulbs can reach 2 pounds apiece and will store 2-3 months. 90 days.",
    },
    {
      name: "Shallot",
      photo: "https://i.imgur.com/p1SBGhT.jpg",
      category: categories[6],
      info: "Traditional Italian variety. Beautiful long bottle-shaped bulbs, attractive color. Flavor is mild and sweet. Best for fresh eating. Can be sown in spring and fall in milder climates. Long-day type. 100-120 days from transplant.",
    },
    {
      name: "Green Onion",
      photo: "https://i.imgur.com/LyxaOLG.jpg",
      category: categories[6],
      info: "Look no further for a hardy, reliable, and, yes, flavorful bunching onion! The stalks of this tender Japanese perennial grow and divide from the base, reaching 12-14in when mature. Enjoy fresh in salads or grilled as a side dish. This variety will overwinter. 60-80 days.",
    },
    {
      name: "Leek",
      photo: "https://i.imgur.com/4qgLZPI.jpg",
      category: categories[6],
      info: "(aka Bleu de Solaise) Beautiful 19th century French historic variety with truly blue-colored leaves that turn violet after a cold spell. Very large 15-20in stalks are sweet and flavorful. Extremely hardy, good for short-season areas and winter harvest. 100-120 days from transplant. ",
    },
  ]);

  console.log(items);

  process.exit();
})();

