import React from "react";
import { BlueHeroBanner } from "../Components";
import styles from "../Styles";

function TermsAndConditions() {
    const heading = {
        title: "Conditions générales d'utilisation",
        paragraph: "Rien de mieux qu'un bon contrat pour partir sur de bonnes bases. Celui-ci est entré en vigueur le : 11 février 2023",
    };

    return (
        <BlueHeroBanner heading={heading}>
            <article className={`${styles.section} mt-0 relative z-[2]`}>
                <div className="flex flex-col items-start gap-4 lg:max-w-[80%]">
                    <div className="flex flex-col items-start gap-4">
                        <p>Les présentes conditions générales décrivent les règles et règlements relatifs à l'utilisation du site web Invvest (ci-après : le Site) opéré par la société Invvest OÜ (ci-après : la Société) et situé à l'adresse <a href="https://invvest.co" target="_blank" className="underline text-primary-clr">https://invvest.co</a>.</p>
                        <p>En accédant au Site, nous supposons que vous acceptez ces conditions générales. Ne continuez pas à utiliser ce Site si vous n'acceptez pas de prendre toutes les conditions générales énoncées sur cette page.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Inscription</h2>
                        <p className="lg:text-justify">L'utilisation de certains services (ci-après : Services) proposés par le Site nécessite que l'utilisateur (ci-après : Utilisateur) s'inscrive sur le Site, en remplissant le formulaire prévu à cet effet. L'Utilisateur doit fournir l'ensemble des informations marquées comme obligatoires, notamment son nom, prénom, adresse email et mot de passe. L'Utilisateur reconnaît et accepte que l'adresse email renseignée sur le formulaire d'inscription constitue son identifiant de connexion. Toute inscription incomplète ne sera pas validée.</p>
                        <p className="lg:text-justify">L'inscription entraîne l'ouverture d'un compte au nom de l'Utilisateur (ci-après : le Compte) qui lui permet de gérer son utilisation des Services sous une forme et selon les moyens techniques que Invvest juge les plus appropriés pour rendre lesdits Services. L'Utilisateur garantit que toutes les informations qu'il donne dans le formulaire d'inscription sont exactes, à jour et sincères et ne sont entachées d'aucun caractère trompeur.</p>
                        <p className="lg:text-justify">Il s'engage à mettre à jour ces informations dans son Compte en cas de modifications, afin qu'elles correspondent toujours aux critères susvisés. L'Utilisateur est informé et accepte que les informations saisies aux fins de création ou de mise à jour de son Compte vaillent preuve de son identité. Les informations saisies par l'Utilisateur l'engagent dès leur validation.</p>
                        <p className="lg:text-justify">L'Utilisateur peut accéder à tout moment à son Compte après s'être identifié à l'aide de son identifiant de connexion ainsi que de son mot de passe. L'Utilisateur s'engage à utiliser personnellement les Services et à ne permettre à aucun tiers de les utiliser à sa place ou pour son compte, sauf à en supporter l'entière responsabilité.</p>
                        <p className="lg:text-justify">Il est pareillement responsable du maintien de la confidentialité et de la sécurité de son identifiant et de son mot de passe, tout accès au Site à l'aide de ces derniers étant réputé effectué par l'Utilisateur. Celui-ci doit immédiatement contacter Invvest s'il remarque que son Compte a été utilisé à son insu. Il reconnaît à Invvest le droit de prendre toutes mesures appropriées en pareil cas.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Description des Services</h2>
                        <p className="lg:text-justify">Avant toute souscription en ligne et en application notamment des dispositions de l'article L111-1 du Code de la consommation, l'Utilisateur peut prendre connaissance des Services sur le Site.</p>
                        <p className="lg:text-justify">L'Utilisateur a accès aux Services qui suivent, sous une forme et selon les fonctionnalités et moyens techniques qu'Invvest juge les plus appropriés.</p>
                        <p className="lg:text-justify">Invvest propose deux types de Services à l'Utilisateur :</p>
                        <ul className="list-disc pl-4">
                            <li>Un service gratuit (ci-après Service Gratuit) permettant l'agrégation des données patrimoniales et l'accès au réseau social du Site.</li>
                            <li>Un service payant (ci-après le Service Pro), souscrit sous forme d'abonnement (ci-après l'Abonnement), proposant des analyses avancées du patrimoine de l'Utilisateur et la possibilité de lier ses comptes bancaires et boursiers au Site.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Autres Services</h2>
                        <p className="lg:text-justify">Invvest se réserve la possibilité de proposer tout autre Service qu'elle jugera utile, sous une forme et selon les fonctionnalités et moyens techniques qu'elle estimera les plus appropriés pour rendre lesdits Services.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Garantie de niveau de services et maintenance</h2>
                        <p className="lg:text-justify">Invvest s'engage à assurer la permanence, la continuité et la qualité de l'accès aux Services. A ce titre, Invvest fera ses meilleurs efforts pour maintenir un accès au Site 24h/24h, 7j/7.</p>
                        <p className="lg:text-justify">En outre, eu égard à la complexité d'internet, l'inégalité des capacités des différents sous-réseaux, l'afflux à certaines heures, aux différents goulots d'étranglement sur lesquels Invvest n'a aucune maîtrise, la responsabilité de Invvest sera limitée au fonctionnement de ses serveurs, dont les limites extérieures sont constituées par les points de raccordement.</p>
                        <p className="lg:text-justify">Invvest ne saurait être tenue pour responsable (i) des vitesses d'accès à ses serveurs, (ii) des ralentissements externes à ses serveurs, et (iii) des mauvaises transmissions dues à une défaillance ou à un dysfonctionnement de ces réseaux et (iv) d'une mauvaise connexion à internet.</p>
                        <p className="lg:text-justify">En cas de nécessité, Invvest se réserve la possibilité de limiter ou de suspendre l'accès au Site pour procéder à toute opération de maintenance et/ou d'amélioration. Dans cette hypothèse, Invvest s'engage à informer à l'avance l'Utilisateur de ces opérations de maintenance et/ou d'amélioration, dans un délai raisonnable, par tous moyens utiles et notamment par message informatif général sur le Site de ces opérations de maintenance.</p>
                        <p className="lg:text-justify">Dans le cadre de ces opérations de maintenance et/ou d'évolution, Invvest s'engage à faire ses meilleurs efforts pour effectuer les sauvegardes des contenus stockés sur le Compte de l'Utilisateur et/ou le Site.</p>
                        <p className="lg:text-justify">L'Utilisateur reconnaît et accepte que la présente garantie de niveau de services ne couvre pas toute panne ou interruption des Services intervenant du fait des opérateurs télécoms ou fournisseurs d'accès à internet et au web mobile ou d'une mauvaise couverture internet ou d'une saturation de l'accès à internet lié au lieu d'un événement.</p>
                        <p className="lg:text-justify">En tout état de cause, il est expressément convenu que la violation de tout engagement prévu au présent article ne pourra en aucun cas être sanctionnée par la rupture des relations contractuelles avec son Utilisateur, et sa responsabilité sera limitée dans les conditions prévues ci-après à l'article « Responsabilité ».</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Prix des Services</h2>
                        <p className="lg:text-justify">Les Services Gratuit identifiés à l'article « Description des Services » des Conditions Générales sont fournis à l'Utilisateur à titre gratuit. L'accès aux Services Pro est soumis au paiement par l'Utilisateur du prix indiqué sur le Site. Les prix sont exprimés en Euros, taxes comprises.</p>
                        <p className="lg:text-justify">Invvest se réserve le droit, à sa libre discrétion et selon des modalités dont elle sera seule juge, de proposer des offres promotionnelles ou réductions de prix.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Révision des prix</h2>
                        <p className="lg:text-justify">Les prix visés à l'article « Prix des Services» peuvent faire l'objet d'une révision par Invvest à tout moment, à sa libre discrétion. L'Utilisateur sera informé de ces modifications par Invvest par tout moyen écrit utile (et notamment par email) 1 mois au moins avant l'entrée en vigueur des nouveaux prix. Ceux-ci s'appliquent dès leur entrée en vigueur.</p>
                        <p className="lg:text-justify">L'Utilisateur qui n'accepte pas les nouveaux prix doit mettre fin à son Abonnement selon les modalités prévues à l'article « Durée des Services/désinscription » et arrêter d'utiliser les Services. A défaut, il sera réputé avoir accepté les nouveaux prix.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Facturation</h2>
                        <p className="lg:text-justify">Les Services font l'objet de factures par Période d'Abonnement qui sont communiquées à l'Utilisateur par tout moyen utile.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Modalités de paiement</h2>
                        <p className="lg:text-justify">Le prix du Service Pro est exigible dès sa souscription, ou dans le cadre d'une offre promotionnelle proposée par Invvest, dès l'expiration de la durée de l'offre promotionnelle.</p>
                        <p className="lg:text-justify">Son paiement peut s'effectuer en ligne, par prélèvement automatique, à travers le service de paiement sécurisé en ligne de l'Établissement de paiement de monnaie électronique ou par tout autre moyen qui sera proposé sur le Site au moment de la commande.</p>
                        <p className="lg:text-justify">L'Utilisateur garantit à Invvest qu'il dispose des autorisations nécessaires pour utiliser le mode de paiement choisi.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Retards et défauts de paiement</h2>
                        <p className="lg:text-justify">L'Utilisateur est informé et accepte expressément que tout retard de paiement de tout ou partie d'une somme due à Invvest à son échéance entraînera automatiquement, et dès le jour suivant la date de règlement figurant sur la facture :</p>
                        <ul className="list-disc pl-4">
                            <li>La déchéance du terme de l'ensemble des sommes dues par l'Utilisateur et leur exigibilité immédiate, quelles que soient les modalités de règlement qui avaient été prévues ;</li>
                            <li>La suspension immédiate des Services et de l'accès au Site jusqu'au complet paiement de l'intégralité des sommes dues ;</li>
                            <li>La facturation au profit d'Invvest d'un intérêt de retard, dû par le seul fait de l'échéance du terme contractuel, au taux de 3 (trois) fois le taux d'intérêt légal, assis sur le montant de la créance non réglée à l'échéance et d'une indemnité forfaitaire de 40 (quarante) euros au titre des frais de recouvrement, sans préjudice d'une indemnisation complémentaire si les frais de recouvrement effectivement exposés sont supérieurs à ce montant.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Durée des Services et désinscription</h2>
                        <p className="lg:text-justify">Le Service Gratuit est souscrit pour une durée indéterminée.</p>
                        <p className="lg:text-justify">L'Utilisateur peut se désinscrire du Service Gratuit à tout moment, directement sur son Espace Personnel ou en adressant une demande à cet effet à Invvest par email à l'adresse <a href="mailto:support@invvest.co" className="underline text-primary-clr">support@invvest.co</a>.</p>
                        <p className="lg:text-justify">Le Service Pro est souscrit sous forme d'Abonnement annuel ou mensuel (ci-après : Période Initiale). A l'issue de la Période Initiale, l'Abonnement se renouvelle tacitement, sauf dénonciation effectuée par Invvest ou par l'Utilisateur au plus tard avant la fin de la Période Initiale.</p>
                        <p className="lg:text-justify">Si l'Abonnement est renouvelé à l'issue de la Période Initiale, il est renouvelé pour des périodes successives de même durée, sauf dénonciation effectuée par l'Utilisateur ou par Invvest jusqu'au dernier jour du mois ou de l'année en cours.</p>
                        <p className="lg:text-justify">La désinscription est effective dans un délai maximum de 7 (sept) jours à compter de cette demande. Elle entraîne le passage en plan gratuit du Compte de l'Utilisateur. Invvest se réserve par ailleurs le droit de fermer et supprimer tout Compte qui resterait inactif pendant une durée continue de 6 (six) mois.</p>
                        <p className="lg:text-justify">En tout état de cause, la dénonciation de l'Abonnement s'effectue par email ou via le Compte de l'Utilisateur et prend effet à la fin de la période d'Abonnement pendant laquelle la demande est envoyée. Il est donné connaissance à l'Utilisateur des dispositions de l'article L215-1 du Code de la consommation :</p>
                        <p className="lg:text-justify">« Pour les contrats de prestations de services conclus pour une durée déterminée avec une clause de reconduction tacite, le professionnel prestataire de services informe le consommateur par écrit, par lettre nominative ou courrier électronique dédiés, au plus tôt trois mois et au plus tard un mois avant le terme de la période autorisant le rejet de la reconduction, de la possibilité de ne pas reconduire le contrat qu'il a conclu avec une clause de reconduction tacite. Cette information, délivrée dans des termes clairs et compréhensibles, mentionne, dans un encadré apparent, la date limite de non-reconduction.</p>
                        <p className="lg:text-justify">Lorsque cette information ne lui a pas été adressée conformément aux dispositions du premier alinéa, le consommateur peut mettre gratuitement un terme au contrat, à tout moment à compter de la date de reconduction.</p>
                        <p className="lg:text-justify">Les avances effectuées après la dernière date de reconduction ou, s'agissant des contrats à durée indéterminée, après la date de transformation du contrat initial à durée déterminée, sont dans ce cas remboursées dans un délai de trente jours à compter de la date de résiliation, déduction faite des sommes correspondant, jusqu'à celle-ci, à l'exécution du contrat. Les dispositions du présent article s'appliquent sans préjudice de celles qui soumettent légalement certains contrats à des règles particulières en ce qui concerne l'information du consommateur. »</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Droit de rétractation</h2>
                        <p className="lg:text-justify">L'Utilisateur dispose d'un droit de rétractation, pendant un délai de 14 (quatorze) jours à compter de sa signature des présentes. Il peut exercer ce droit en adressant à Invvest aux coordonnées mentionnées à l'article « Exploitant des Services, contact », avant l'expiration du délai susvisé, le formulaire figurant en Annexe des présentes, dûment complété, ou toute autre déclaration, dénuée d'ambiguïté, exprimant sa volonté de se rétracter.</p>
                        <p className="lg:text-justify">En cas d'exercice du droit de rétractation, Invvest remboursera à l'Utilisateur tous les paiements reçus de celui-ci, sans retard excessif et, en tout état de cause, au plus tard 14 (quatorze) jours à compter du jour où Invvest aura été informée de la décision de rétractation de l'Utilisateur. Le remboursement sera effectué en utilisant le même moyen de paiement que celui utilisé pour la transaction initiale, sauf si l'Utilisateur convient expressément d'un moyen différent. En tout état de cause, ce remboursement n'occasionnera pas de frais pour l'Utilisateur.</p>
                        <p className="lg:text-justify">Si l'Utilisateur a demandé à ce que les Services commencent avant l'expiration du délai de rétractation, en cochant la case à cet effet dans son formulaire d'inscription, il peut exercer son droit de rétractation dans le délai et selon les modalités susvisées. Il sera dans ce cas redevable, envers Invvest du prix de l'Abonnement, calculé au prorata pour la durée écoulée jusqu'à la communication de sa décision de se rétracter à Invvest .</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Hébergement</h2>
                        <p className="lg:text-justify">Invvest s'engage à assurer, dans les termes d'une obligation de moyens, l'hébergement des Comptes et de tout contenu publié par l'Utilisateur sur son Compte conformément aux usages de la profession et à l'état de l'art, sur ses propres serveurs ou par un prestataire d'hébergement professionnel, exerçant son activité conformément aux usages de la profession et à l'état de l'art.</p>
                        <p className="lg:text-justify">Dans ce cadre, Invvest s'engage à fournir à l'Utilisateur des capacités de stockage et de traitement suffisantes dans le cadre des Services, conformément aux usages de la profession et à l'état de l'art.</p>
                        <p className="lg:text-justify">Invvest s'engage à mettre en œuvre l'ensemble des moyens techniques, conformes à l'état de l'art, nécessaires pour assurer la sécurité et l'accès aux Services, portant sur la protection et la surveillance des infrastructures, le contrôle de l'accès physique et/ou immatériel auxdites infrastructures, ainsi que sur la mise en œuvre des mesures de détection, de prévention et de récupération pour protéger les serveurs d'actes malveillants.</p>
                        <p className="lg:text-justify">Invvest s'engage également à prendre toutes précautions utiles, au regard de la nature des données et des risques présentés par les traitements automatisés de données mis en œuvre pour les besoins des Services, pour préserver la sécurité des données, et notamment empêcher qu'elles soient déformées, endommagées ou que des tiers non autorisés y aient accès.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Assistance technique</h2>
                        <p className="lg:text-justify">Invvest propose à l'Utilisateur une assistance technique accessible par email à l'adresse suivante : <a href="mailto:support@invvest.co" className="underline text-primary-clr">support@invvest.co</a>, lui permettant de déclarer toute difficulté rencontrée lors de l'utilisation des Services et l'accès au Site.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Cookies</h2>
                        <p className="lg:text-justify">Le site web utilise des cookies pour aider à personnaliser votre expérience en ligne. En accédant à Invvest, vous avez accepté d'utiliser les cookies requis.</p>
                        <p className="lg:text-justify">Un cookie est un fichier texte qui est placé sur votre disque dur par un serveur de pages web. Les cookies ne peuvent pas être utilisés pour exécuter des programmes ou transmettre des virus à votre ordinateur. Les cookies vous sont attribués de manière unique et ne peuvent être lus que par un serveur web du domaine qui vous a émis le cookie.</p>
                        <p className="lg:text-justify">Nous pouvons utiliser des cookies pour collecter, stocker et suivre des informations à des fins statistiques ou marketing pour exploiter notre site web. Vous avez la possibilité d'accepter ou de refuser les Cookies facultatifs. Il existe certains Cookies obligatoires qui sont nécessaires au fonctionnement de notre site web. Ces cookies ne nécessitent pas votre consentement car ils fonctionnent toujours. N'oubliez pas qu'en acceptant les Cookies obligatoires, vous acceptez également les Cookies tiers, qui pourraient être utilisés via des services fournis par des tiers si vous utilisez ces services sur notre site web, par exemple, une fenêtre d'affichage vidéo fournie par des tiers et intégrée à notre site web.</p>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Licence</h2>
                        <p className="lg:text-justify">Sauf indication contraire, Invvest OÜ et/ou ses concédants de licence détiennent les droits de propriété intellectuelle de l'ensemble du matériel présent sur Invvest. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir de Invvest pour votre usage personnel, sous réserve des restrictions fixées dans les présentes conditions générales.</p>
                        <p className="lg:text-justify">Vous ne devez pas :</p>
                        <ul className="list-dsc pl-4">
                            <li>Copier ou republier des éléments provenant de Invvest.</li>
                            <li>Vendre, louer ou concéder une sous-licence pour le matériel provenant de Invvest.</li>
                            <li>Reproduire, dupliquer ou copier le matériel provenant de Invvest.</li>
                            <li>Redistribuer le contenu de Invvest</li>
                        </ul>
                        <p className="lg:text-justify">Le présent accord prend effet à la date des présentes.</p>
                        <p className="lg:text-justify">Certaines parties de ce site web offrent aux utilisateurs la possibilité de publier et d'échanger des opinions et des informations dans certaines zones du site web. Invvest OÜ ne filtre pas, n'édite pas, ne publie pas et ne révise pas les commentaires avant leur présence sur le site web. Les commentaires ne reflètent pas les vues et opinions de Invvest OÜ, de ses agents et/ou de ses affiliés. Les commentaires reflètent les vues et opinions de la personne qui les publie. Dans la mesure où les lois applicables le permettent, Invvest OÜ ne peut être tenu responsable des commentaires ou de toute responsabilité, de tout dommage ou de toute dépense causés et/ou subis à la suite de l'utilisation et/ou de l'affichage et/ou de l'apparition des commentaires sur ce site web.</p>
                        <p className="lg:text-justify">Invvest OÜ se réserve le droit de surveiller tous les commentaires et de supprimer tout commentaire qui peut être considéré comme inapproprié, offensant, ou qui entraîne une violation des présentes conditions générales.</p>
                        <p className="lg:text-justify">Vous garantissez et déclarez que :</p>
                        <ul className="list-disc pl-4">
                            <li>Vous avez le droit de publier les commentaires sur notre site web et disposez de toutes les licences et de tous les consentements nécessaires pour le faire ;</li>
                            <li>Les commentaires n'envahissent aucun droit de propriété intellectuelle, y compris, sans limitation, le droit d'auteur, le brevet ou la marque de commerce d'un tiers ;</li>
                            <li>Les Commentaires ne contiennent aucun élément diffamatoire, calomnieux, offensant, indécent ou autrement illégal, constituant une atteinte à la vie privée.</li>
                            <li>Les Commentaires ne seront pas utilisés pour solliciter ou promouvoir des affaires ou des coutumes ou présenter des activités commerciales ou des activités illégales.</li>
                        </ul>
                        <p className="lg:text-justify">Par la présente, vous accordez à Invvest OÜ une licence non exclusive pour utiliser, reproduire, éditer et autoriser d'autres personnes à utiliser, reproduire et éditer n'importe lequel de vos commentaires sous toutes les formes, formats ou médias.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">L'établissement d'hyperliens vers notre contenu</h2>
                        <p className="lg:text-justify">Les organisations suivantes peuvent créer des liens vers notre site web sans autorisation écrite préalable :</p>
                        <ul className="list-disc pl-4">
                            <li>Les agences gouvernementales ;</li>
                            <li>Moteurs de recherche ;</li>
                            <li>Organismes de presse ;</li>
                            <li>Les distributeurs d'annuaires en ligne peuvent créer des liens vers notre site web de la même manière qu'ils créent des hyperliens vers les sites web d'autres entreprises répertoriées ; et...</li>
                            <li>Les entreprises accréditées à l'échelle du système, à l'exception des organismes à but non lucratif de sollicitation, des centres commerciaux de bienfaisance et des groupes de collecte de fonds de bienfaisance qui ne peuvent pas établir d'hyperlien vers notre site Web.</li>
                        </ul>
                        <p className="lg:text-justify">Ces organisations peuvent créer des liens vers notre page d'accueil, vers des publications ou vers d'autres informations du site web, tant que le lien : (a) n'est en aucun cas trompeur ; (b) n'implique pas faussement le parrainage, l'approbation ou le soutien de la partie liante et de ses produits et/ou services ; et (c) s'inscrit dans le contexte du site de la partie liante.</p>
                        <p className="lg:text-justify">Nous pouvons prendre en considération et approuver d'autres demandes de liens provenant des types d'organisations suivantes :</p>
                        <ul className="list-disc pl-4">
                            <li>les sources d'information communément connues des consommateurs et/ou des entreprises ;</li>
                            <li>les sites communautaires </li>
                            <li>les associations ou autres groupes représentant des organismes de bienfaisance ;</li>
                            <li>les distributeurs d'annuaires en ligne ;</li>
                            <li>les portails internet ;</li>
                            <li>les cabinets de comptabilité, d'avocats et de consultants ; et</li>
                            <li>les établissements d'enseignement et les associations professionnelles.</li>
                        </ul>
                        <p className="lg:text-justify">Nous approuverons les demandes de liens de ces organisations si nous décidons que : (a) le lien ne nous donnerait pas une image défavorable de nous-mêmes ou de nos entreprises accréditées ; (b) l'organisation n'a pas de dossier négatif avec nous ; (c) l'avantage que nous retirons de la visibilité de l'hyperlien compense l'absence de Invvest OÜ ; et (d) le lien s'inscrit dans le contexte d'informations générales sur les ressources.</p>
                        <p className="lg:text-justify">Ces organisations peuvent établir un lien vers notre page d'accueil tant que le lien : (a) n'est en aucun cas trompeur ; (b) n'implique pas faussement le parrainage, l'approbation ou l'aval de la partie liante et de ses produits ou services ; et (c) s'inscrit dans le contexte du site de la partie liante.</p>
                        <p className="lg:text-justify">Si vous êtes l'une des organisations énumérées au paragraphe 2 ci-dessus et que vous souhaitez créer un lien vers notre site web, vous devez nous en informer en envoyant un e-mail à Invvest OÜ. Veuillez inclure votre nom, le nom de votre organisation, vos coordonnées ainsi que l'URL de votre site, une liste de toutes les URL à partir desquelles vous avez l'intention de créer un lien vers notre site web, et une liste des URL de notre site vers lesquelles vous souhaitez créer un lien. Attendez 2 à 3 semaines pour obtenir une réponse.</p>
                        <p className="lg:text-justify">Les organisations approuvées peuvent établir un hyperlien vers notre site web de la manière suivante :</p>
                        <ul className="list-disc pl-4">
                            <li>Par l'utilisation de notre dénomination sociale ; ou</li>
                            <li>Par l'utilisation du localisateur de ressources uniforme vers lequel le lien est établi ; ou</li>
                            <li>Par l'utilisation de toute autre description de notre site web faisant l'objet d'un lien qui a du sens dans le contexte et le format du contenu du site web de la partie liante.</li>
                        </ul>
                        <p className="lg:text-justify">Aucune utilisation du logo ou d'autres illustrations de Invvest OÜ ne sera autorisée pour la création de liens en l'absence d'un accord de licence de marque.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Responsabilité du contenu </h2>
                        <p className="lg:text-justify">Nous ne serons pas tenus responsables du contenu qui apparaît sur votre site web. Vous acceptez de nous protéger et de nous défendre contre toutes les réclamations qui sont soulevées sur votre site web. Aucun lien ne doit apparaître sur un site web qui pourrait être interprété comme diffamatoire, obscène ou criminel, ou qui enfreint, viole de toute autre manière, ou préconise l'infraction ou toute autre violation des droits d'un tiers.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Réserve de droits </h2>
                        <p className="lg:text-justify">Nous nous réservons le droit de vous demander de supprimer tous les liens ou un lien particulier vers notre site web. Vous acceptez de retirer immédiatement tous les liens vers notre site web sur demande. Nous nous réservons également le droit de modifier à tout moment les présentes conditions générales et sa politique en matière de liens. En établissant continuellement des liens vers notre site web, vous acceptez d'être lié à ces conditions générales de liaison et de les suivre.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Suppression des liens de notre site web </h2>
                        <p className="lg:text-justify">Si vous trouvez un lien sur notre site web qui est offensant pour une raison quelconque, vous êtes libre de nous contacter et de nous informer à tout moment. Nous examinerons les demandes de suppression de liens, mais nous ne sommes pas obligés de le faire ou de vous répondre directement.</p>
                        <p className="lg:text-justify">Nous ne garantissons pas l'exactitude des informations figurant sur ce site web. Nous ne garantissons pas leur exhaustivité ou leur exactitude, et nous ne promettons pas non plus de garantir que le site web reste disponible ou que le matériel sur le site web est maintenu à jour.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Avis de non-responsabilité</h2>
                        <p className="lg:text-justify">Dans la mesure maximale autorisée par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site web et à l'utilisation de ce site web. Rien dans cette clause de non-responsabilité ne pourra :</p>
                        <ul className="list-disc pl-4">
                            <li>limiter ou exclure notre ou votre responsabilité en cas de décès ou de dommages corporels ;</li>
                            <li>limiter ou exclure notre ou votre responsabilité en cas de fraude ou de fausse déclaration frauduleuse ;</li>
                            <li>limiter l'une de nos ou de vos responsabilités d'une manière qui n'est pas autorisée par la loi applicable ; ou</li>
                            <li>exclure l'une de nos ou de vos responsabilités qui ne peuvent être exclues en vertu de la loi applicable.</li>
                        </ul>
                        <p className="lg:text-justify">Les limitations et interdictions de responsabilité fixées dans cette section et ailleurs dans cette clause de non-responsabilité : (a) sont soumises au paragraphe précédent ; et (b) régissent toutes les responsabilités découlant de la clause de non-responsabilité, y compris les responsabilités contractuelles, délictuelles et pour violation d'une obligation légale.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Garantie de l'Utilisateur</h2>
                        <p className="lg:text-justify">L'Utilisateur garantit Invvest contre toutes plaintes, réclamations, actions et/ou revendications quelconques qu'elle pourrait subir du fait de la violation, par L'Utilisateur de l'une quelconque de ses obligations ou garanties aux termes des présentes Conditions Générales.</p>
                        <p className="lg:text-justify">L'Utilisateur s'engage à indemniser Invvest de tout préjudice qu'elle subirait et à lui payer tous les frais, charges et/ou condamnations qu'elle pourrait avoir à supporter de ce fait.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Responsabilité et garantie de Invvest </h2>
                        <p className="lg:text-justify">Invvest s'engage à fournir les Services avec diligence et selon les règles de l'art, étant précisé qu'il pèse sur elle une obligation de moyens, à l'exclusion de toute obligation de résultat, ce que l'Utilisateur reconnaît et accepte expressément.</p>
                        <p className="lg:text-justify">Invvest intervient exclusivement aux fins de fourniture des Services décrits aux présentes Conditions Générales. Invvest ne garantit pas à l'Utilisateur que les Services proposés satisferont l'ensemble de ses besoins et attentes.</p>
                        <p className="lg:text-justify">Le Site ne constitue qu'un ensemble d'outils permettant à l'Utilisateur de l'aider suivre son patrimoine grâce à un regroupement et une analyse des données qu'il aura lui-même renseignées. Invvest n'est en aucun cas garante de l'exhaustivité ni de la mise à jour de ces données, qui sont de la seule responsabilité de l'Utilisateur.</p>
                        <p className="lg:text-justify">Invvest ne pourra être tenue responsable des décisions prises par l'Utilisateur ou par tout tiers désigné par lui, ni de la réussite de toute opération ou investissement de toute sorte qu'il souhaiterait engager postérieurement à son inscription sur le Site. De même, Invvest ne pourra en aucun cas être responsable du Contenu publié par l'Utilisateur sur le Site, sur lesquelles elle n'exerce aucun contrôle, vérification ou modération d'aucune sorte.</p>
                        <p className="lg:text-justify">Invvest s'engage à procéder régulièrement à des contrôles afin de vérifier le fonctionnement et l'accessibilité des Services. A ce titre, Invvest se réserve la faculté d'interrompre momentanément l'accès au Site pour des raisons de maintenance.</p>
                        <p className="lg:text-justify">De même, Invvest ne saurait être tenue responsable des difficultés ou impossibilités momentanées d'accès au Site qui auraient pour origine des circonstances qui lui sont extérieures, la force majeure, ou encore qui seraient dues à des perturbations des réseaux de télécommunication, les Utilisateurs étant informés de la complexité des réseaux mondiaux et de l'afflux, à certaines heures, des utilisateurs d'internet.</p>
                        <p className="lg:text-justify">Les Services sont fournis par Invvest tels quels et sans garantie d'aucune sorte, expresse ou implicite. Invvest ne garantit notamment pas aux Utilisateurs (i) que les Services, soumis à une recherche constante pour en améliorer notamment la performance et le progrès, seront totalement exempts d'erreurs, de vices ou défauts, (ii) que les Services, étant standard et nullement proposés à la seule intention d'un Utilisateur donné en fonction de ses propres contraintes personnelles, répondront spécifiquement à ses besoins et attentes.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Comportements prohibés</h2>
                        <p className="lg:text-justify">Il est strictement interdit d'utiliser les Services aux fins suivantes :</p>
                        <ul className="list-disc pl-4">
                            <li>l'exercice d'activités illégales, frauduleuses ou portant atteinte aux droits ou à la sécurité des tiers,</li>
                            <li>l'atteinte à l'ordre public ou la violation des lois et règlements en vigueur,</li>
                            <li>l'intrusion dans le système informatique d'un tiers ou toute activité de nature à nuire, contrôler, interférer, ou intercepter tout ou partie du système informatique d'un tiers, en violer l'intégrité ou la sécurité,</li>
                            <li>les manipulations destinées à améliorer le référencement d'un site tiers,</li>
                            <li>l'aide ou l'incitation, sous quelque forme et de quelque manière que ce soit, à un ou plusieurs des actes et activités décrits ci-dessus,</li>
                            <li>et plus généralement toute pratique détournant les Services à des fins autres que celles pour lesquelles ils ont été conçus.</li>
                            <li>Il est strictement interdit aux Utilisateurs de copier et/ou de détourner à leurs fins ou à celles de tiers les données récupérées sur le Site autres que celles qui appartiennent aux Utilisateurs, le concept, les technologies ou tout autre élément du Site.</li>
                        </ul>
                        <p className="lg:text-justify">Sont également strictement interdits : (i) tous comportements de nature à interrompre, suspendre, ralentir ou empêcher la continuité des Services, (ii) toutes intrusions ou tentatives d'intrusions dans les systèmes de Invvest, (iii) tous détournements des ressources système du site, (iv) toutes actions de nature à imposer une charge disproportionnée sur les infrastructures de cette dernière, (v) toutes atteintes aux mesures de sécurité et d'authentification, (vi) tous actes de nature à porter atteinte aux droits et intérêts financiers, commerciaux ou moraux de Invvest, et enfin plus généralement (vii) tout manquement aux présentes Conditions Générales.</p>
                        <p className="lg:text-justify">Il est strictement interdit de monnayer, vendre ou concéder tout ou partie de l'accès aux Services ou au Site, ainsi qu'aux informations qui y sont hébergées et/ou partagées.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Sanctions des manquements</h2>
                        <p className="lg:text-justify">En cas de manquement aux articles « Obligations et responsabilité de l'Utilisateurs » et « Garantie de l'Utilisateur », ou plus généralement, d'infraction aux lois et règlements par l'Utilisateur, Invvest se réserve le droit de prendre toute mesure appropriée et notamment de :</p>
                        <ul className="list-disc pl-4">
                            <li>suspendre, supprimer ou empêcher l'accès aux Services de l'Utilisateur, auteur du manquement ou de l'infraction, ou y ayant participé,</li>
                            <li>supprimer tout Contenu en lien avec le manquement ou l'infraction considéré(e), en totalité ou en partie,</li>
                            <li>prendre toutes mesures appropriées et engager toute action en justice,</li>
                            <li>avertir le cas échéant les autorités compétentes, coopérer avec elles et leur fournir toutes les informations utiles à la recherche et à la répression d'activités illégales ou illicites.</li>
                        </ul>
                        <p className="lg:text-justify">L'Utilisateur est informé et accepte que tout manquement à ses obligations pourra entraîner, outre les conséquences prévues ci-dessus, la résolution immédiate de son Compte par Invvest, par tout moyen écrit.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Confidentialité</h2>
                        <p className="lg:text-justify">Chaque partie s'engage à garder strictement confidentiels les documents, éléments, données et informations de l'autre partie dont elle serait destinataire qui seront expressément identifiés par l'autre partie comme étant confidentiels. S'agissant de Invvest, les parties conviennent d'ores et déjà expressément que cette obligation de confidentialité couvre les données à caractère personnel qu'elle sera amenée à traiter pour L'Utilisateur dans le cadre des Services.</p>
                        <p className="lg:text-justify">L'ensemble de ces informations est désigné ci-après les « Informations Confidentielles ».</p>
                        <p className="lg:text-justify">La partie qui reçoit des Informations Confidentielles s'engage à ne pas les divulguer sans accord préalable de l'autre partie, pendant une durée de 3 (trois) ans à compter de la fin de l'exécution des Services concernés. Elle ne pourra les transmettre à des employés, collaborateurs, stagiaires ou conseils que s'ils sont tenus à la même obligation de confidentialité que celle prévue aux présentes. Cette obligation ne s'étend pas aux documents, éléments, données et informations :</p>
                        <p className="lg:text-justify">i. dont la partie qui les reçoit avait déjà connaissance ; ii. déjà publics lors de leur communication ou qui le deviendraient sans violation des Conditions Générales; iii. qui auraient été reçus d'un tiers de manière licite ; iv. dont la communication serait exigée par les autorités judiciaires, en application des lois et règlements ou en vue d'établir les droits d'une partie au titre des Conditions Générales.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Propriété intellectuelle</h2>
                        <p className="lg:text-justify">Les systèmes, logiciels, structures, infrastructures, bases de données, codes et contenus de toute nature (textes, images, visuels, logos, marques, bases de données, etc) exploités par Invvest sur le Site, à l'exclusion des Contenus dont la propriété appartient à l'Utilisateur, sont protégés par tous droits de propriété intellectuelle ou droits des producteurs de bases de données en vigueur.</p>
                        <p className="lg:text-justify">Tous désassemblages, décompilations, décryptages, extractions, réutilisations, copies et plus généralement, tous actes de reproduction, représentation, diffusion et utilisation de l'un quelconque de ces éléments, en tout ou partie, sans l'autorisation d'Invvest sont strictement interdits et pourront faire l'objet de poursuites judiciaires.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Autorisation de diffusion de l'image et des témoignages</h2>
                        <p className="lg:text-justify">L'Utilisateur autorise expressément Invvest à faire usage de son image de profil, aux fins d'illustration sur le Site ou de promotion de celui-ci, par tout moyen et sur tout support, pour le monde entier, pour la durée de l'inscription de l'Utilisateur sur le Site. Cette autorisation est consentie à titre gratuit.</p>
                        <p className="lg:text-justify">Pendant la durée de leur utilisation des Services, les Utilisateurs autorisent Invvest à utiliser les témoignages qu'ils publient sur le Site (ci-après les « Témoignages ») pour la promotion de celui-ci, selon les modalités suivantes :</p>
                        <ul className="list-disc pl-4">
                            <li>Ils consentent à ce que leurs Témoignages soient diffusés à titre gracieux par Invvest sur le Site et sur tous autres sites internet français ou étrangers, édités par toutes sociétés avec lesquelles la Société a des accords,</li>
                            <li>Ils consentent à ce que leurs Témoignages soient diffusés par Invvest par tout moyen et sur tout support aux fins de promotion du Site,</li>
                            <li>Ils acceptent que leurs Témoignages soient traduits en toutes langues,</li>
                            <li>Ils reconnaissent et acceptent que les Témoignages pourront faire l'objet de modifications, notamment quant à leur cadrage, leur format et leurs couleurs, ainsi que d'altérations ou de dégradations dans leur qualité, en fonction des contraintes techniques du Site,</li>
                            <li>Ils renoncent à demander à Invvest une quelconque rémunération, redevance, indemnité ou compensation financière à ce titre.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Données à caractère personnel</h2>
                        <p className="lg:text-justify">Invvest pratique une politique de protection des données personnelles dont les caractéristiques sont explicitées dans le document intitulé « Politique de confidentialité », dont l'Utilisateur est expressément invité à prendre connaissance.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Modifications</h2>
                        <p className="lg:text-justify">Invvest se réserve la faculté de modifier à tout moment les présentes Conditions Générales. Les Utilisateurs seront informés de ces modifications par tout moyen utile.</p>
                        <p className="lg:text-justify">Les Utilisateurs qui n'acceptent pas les Conditions Générales modifiées doivent se désinscrire des Services selon les modalités prévues à l'article « Durée des Services et désinscription ».</p>
                        <p className="lg:text-justify">Tout Utilisateur qui a recours aux Services postérieurement à l'entrée en vigueur des Conditions Générales modifiées est réputé avoir accepté ces modifications.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Langue</h2>
                        <p className="lg:text-justify">Dans l'hypothèse d'une traduction des présentes Conditions Générales dans une ou plusieurs langues, la langue d'interprétation sera la langue française en cas de contradiction ou de contestation sur la signification d'un terme ou d'une disposition.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="font-bold text-xl">Loi applicable et juridiction</h2>
                        <p className="lg:text-justify">Les Conditions Générales sont soumises au droit estonien et seront régies et interprétées selon ce droit.</p>
                        <p className="lg:text-justify">Pour toute question relative à ces Conditions générales d'utilisation, veuillez envoyer un email à l'adresse <a href="mailto:hello@invvest.co" className="underline text-primary-clr">hello@invvest.co</a></p>
                    </div>
                </div>
            </article>
        </BlueHeroBanner>
    );
};

export default TermsAndConditions;
