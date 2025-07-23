CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE poem (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  description VARCHAR(5000) NOT NULL,
  image VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);


INSERT INTO user (id, name, email, password, image) VALUES
  (1, "Paul Éluard", "eluard@example.com", "$argon2i$v=19$m=16,t=2,p=1$bzNlRVZabTVMaG93WkVLbQ$7x4ON3E2xJSzJyUr9vPMQQ", "eluard.jpg"),
  (2, "Anna de Noailles", "noailles@example.com", "$argon2i$v=19$m=16,t=2,p=1$bzNlRVZabTVMaG93WkVLbQ$7x4ON3E2xJSzJyUr9vPMQQ", "noailles.jpg"),
  (3, "René Char", "char@example.com", "$argon2i$v=19$m=16,t=2,p=1$bzNlRVZabTVMaG93WkVLbQ$7x4ON3E2xJSzJyUr9vPMQQ", "char.jpg"),
  (4, "Ahmed Firoum", "ahmed@example.com", "$argon2i$v=19$m=16,t=2,p=1$bzNlRVZabTVMaG93WkVLbQ$7x4ON3E2xJSzJyUr9vPMQQ", "Guts.webp");


INSERT INTO poem (id, title, description, image, date, user_id) VALUES
  (1, "Liberté", "Sur mes cahiers d'écolier
  Sur mon pupitre et les arbres
  Sur le sable sur la neige
  J'écris ton nom", "liberte.jpg", "1942-01-01", 1),
  (2, "L'amoureuse", "Elle est debout sur mes paupières
  Et ses cheveux sont dans les miens
  Elle a la forme de mes mains
  Elle a la couleur de mes yeux", "lamoureuse.jpg", "1926-01-01", 1),
  (3, "La courbe de tes yeux", "La courbe de tes yeux fait le tour de mon cœur
  Un rond de danse et de douceur", "courbe.jpg", "1931-01-01", 1),

  (4, "L'offrande", "J'ai donné mon cœur à la terre
  Et la terre m'a donné ses fleurs", "offrande.jpg", "1902-01-01", 2),
  (5, "Le bonheur", "Le bonheur est un oiseau
  Qui se pose sur la main", "bonheur.jpg", "1910-01-01", 2),
  (6, "L'ombre des jours", "L'ombre des jours s'étend sur la plaine
  Et la lumière danse encore", "ombre.jpg", "1912-01-01", 2),
  (7, "Fureur et mystère", "Dans la nuit j'ai cherché la lumière
  Et la lumière m'a trouvé", "fureur.jpg", "1948-01-01", 3),
  (8, "Lettera amorosa", "Je t'écris du fond de la nuit
  Avec l'encre de mes rêves", "lettera.jpg", "1953-01-01", 3),
  (9, "Le poème pulvérisé", "Les mots volent en éclats
  Et le silence les recueille", "pulverise.jpeg", "1945-01-01", 3),
  (10, "El Merdjab", "J'ai grandi en voyant les toits faits de tôle,
  Les rires masquent la faim, tu nous connais, on joue un rôle,
  Tessala el Merdja respire l'amour et les galères,
  Entre les rêves trop grands et les poches à l'envers.
  
  Le béton craque, mais les coeurs tiennent le coup,
  Ici on survit avec un rien, mais c'est tout,
  Les darons rentrent tard, usés par la pauvreté,
  Et moi j'sors marcher, l'âme en vrac dans Alger.
  
  J'ai vu des vies entassées dans des maisons sans lumière,
  Des voisins qui partagent la misère comme une prière,
  Les odeurs de pain chaud, la rue comme repère,
  Mais l'avenir s'fait rare, comme l'eau dans l'air.
  
  Y a du courage dans les mains et des larmes dans les yeux,
  On parle de demain, mais on vit dans un milieu,
  Ou les rêves s'arrêtent souvent au bas des escaliers,
  L'Algérie est belle, mais on oublie de la soigner.
  
  Tu sais moi, j'suis qu'un gamin qui observe et qui pense,
  Mais quand j'vois tout ça, j'sais pas si j'ai ma chance,
  La pauvreté m'a pris la main, j'lâcherai pas, 
  Parce que même dans l'ombre, y'a toujours des éclats.", "elmerdjab.jpg", "2025-02-01", 4),
  (11, "Solo", "Dans l'ombre silencieuse, seul je me tiens,
  Echo solitaire, murmures lointains.
  Les étoiles témoins de ma solitude, 
  Illuminant le ciel sombre, triste interlude.
  
  Au fil des jours, compagnon du silence, 
  Les rêves s'etouffent, perdent leur essence.
  Mais dans ce calme, une lueur persiste,
  L'espoir murmure, douce mélancolie triste.
  
  Les pensées vagabondent, cherchant un écho,
  Un coeur qui réponde, un doux mot, une fleur qui éclot.
  Sous le poids de la nuit, je m'enveloppe, 
  Solitude partagée, dans l'ombre qui m'étreint et m'écope.
  
  Pourtant, demain promet un nouveau jour, 
  Où les étreintes de l'amour éclosent toujours.
  En attendant, dans la douceur du crépuscule, 
  Je me tiens, solitaire, mais l'espoir brûle.", "solo.jpg", "2023-12-26", 4),
  (12, "Femme fleur", "Le voilà s'approchant avec une telle évidence,
  L'invitant doucement à partager sa danse,
  Il l'envahit soudain de frisson et d'envie.
  Elle s'éveille et s'étire,
  et elle s'ouvre à la vie,
  Elle est fleur, elle est plante,
  Elle est femme qui chante,
  Et de pétales est son habit,
  D'étamines, son voile de folie,
  Elle qui est si belle, donnant couleur à la vie.
  
  Et la voici qui vole, la voici qui s'élance,
  Végétale ou humaine,
  mêlant les apparences,
  Légère ou aérienne, inondée d'insouciance,
  Guidée par lui, par son hymne à la vie.
  
  Le soleil et la terre et les cieux immenses,
  À côté de son cœur, 
  Semblent aujourd'hui, si petits.
  L'amour du Magicien,
  Tourbillon d'évidence,
  L'enveloppe de douceur et de parfum intense,
  L'amenant jusqu'à lui, et cet état de bonheur, c'est la magie de la vie.", "femmefleur.jpg", "2022-05-12", 4),
  (13, "Pour toi, Minou", "Aujourd'hui, le ciel a pleuré,
  Si si je t'assure,
  Ses larmes mêlées à celles de mon cœur,
  Comme s'il savait que tu n'étais plus,
  Que ton absence creusait le silence.
  
  Hier déjà, le vent grondait,
  La nuit s'est faite plus lourde,
  Je t'ai caressé une dernière fois,
  Ton corps cherchant la paix,
  Tes yeux me parlant de fatigue,
  Mais ton ronron, fragile,
  Berçait encore mon chagrin.
  
  Tu étais force et douceur,
  Un esprit calme dans la tempête, 
  Un cœur vaillant,
  Même quand la douleur t'envahissait, 
  Tu hochais la tête, 
  Comme pour me rassurer, 
  Comme pour me dire : 'Je suis là, ne t'en fais pas'.
  
  J'ai prié pour toi, 
  Demandé la douceur pour ton départ,
  Et Dieu t'a repris,
  Comme on reprend un trésor trop précieux,
  Je comprends,
  Toi aussi, tu méritais la paix.
  
  Le jour s'est levé sur un monde sans toi, 
  L'air humide, l'odeur de la pluie,
  Tout me rappelle ton absence,
  Après l'orage, le soleil s'est levé,
  Mais la lumière est pâle,
  Quand le cœur est blessé.
  
  Je suis fort, je le serai encore, 
  Mais chaque adieu fatigue un peu plus mon âme,
  Tu es parti vers un monde plus beau,
  Plus doux que tout ce que j'ai pu t'offrir.
  
  Tu étais une perle rare,
  Le prince d'un royaume oublié,
  Celui qui veillait sur les nuits sombres,
  Celui qui, d'un regard, apaisait les tempêtes.
  
  Si seulement tu pouvais me répondre,
  Ton ronronnement n'est plus qu'un souvenir,
  Tes miaulements, une musique lointaine,
  Mais dans mon cœur, tu restes, 
  Chat parfait, ami fidèle.
  
  Sur ces mots, je te dis adieu,
  A toi, Minou,
  Mon chat,
  Pour toujours dans ma mémoire,
  Pour toujours, dans mon coeur.", "minou.webp", "2025-07-19", 4)
  ;
