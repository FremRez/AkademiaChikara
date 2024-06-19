function GenerateFooter() {
    const footer = document.createElement('footer');



    // ----- Logo ----- //
    const chikaraLogo = document.createElement('img');
    chikaraLogo.src = 'images/Logo.png';
    chikaraLogo.classList.add('footer-chikara-logo');
    footer.appendChild(chikaraLogo);



    // ----- Content ----- //
    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('footer-items-container');
    footer.appendChild(itemsContainer);


    const location = document.createElement('p');
    const locationIcon = document.createElement('ion-icon');
    locationIcon.name = 'location-outline';
    location.textContent = '35-103 Rzeszów, ul. Hanasiewicza 10';
    location.insertAdjacentElement('afterbegin', locationIcon);
    itemsContainer.appendChild(location);


    const call = document.createElement('div');
    call.classList.add('footer-call');
    let numbersTable = ['781 231 014', '605 828 755'];
    numbersTable.forEach(number => {
        const numbers = document.createElement('p');
        const numbersIcon = document.createElement('ion-icon');
        numbersIcon.name = 'call-outline';
        numbers.textContent = number;
        numbers.insertAdjacentElement('afterbegin', numbersIcon);
        call.appendChild(numbers);
    });
    itemsContainer.appendChild(call);


    const mail = document.createElement('p');
    const mailIcon = document.createElement('ion-icon');
    mailIcon.name = 'mail-outline';
    mail.textContent = 'karate.rzeszow@gmail.com';
    mail.insertAdjacentElement('afterbegin', mailIcon);
    itemsContainer.appendChild(mail);


    const socials = document.createElement('div')
    socials.classList.add('footer-social-media')
    let socialsTable = [
        {
            icon: 'logo-facebook',
            link: 'https://www.facebook.com/AkademiaSportuChikara/?ref=bookmarks',
        },
        {
            icon: 'logo-youtube',
            link: 'https://www.youtube.com/@chikaratv',
        },
        {
            icon: 'logo-instagram',
            link: 'https://www.instagram.com/akademiachikara',
        },
        {
            icon: 'logo-tiktok',
            link: 'https://www.tiktok.com/@akademiachikara',
        },
        {
            icon: 'logo-linkedin',
            link: 'https://www.linkedin.com/company/akademia-sportu-chikara-rzesz%C3%B3w',
        }
    ]
    socialsTable.forEach(social => {
        const socialMedias = document.createElement('a');
        socialMedias.href = social.link;
        const socialMediasIcon = document.createElement('ion-icon');
        socialMediasIcon.name = social.icon;
        socialMedias.appendChild(socialMediasIcon);
        socials.appendChild(socialMedias);
    });
    itemsContainer.appendChild(socials);



    // ----- Separator ----- //
    const separator = document.createElement('div');
    separator.classList.add('footer-separator');
    footer.appendChild(separator);




    // ----- PartnersLogos ----- //
    const partners = document.createElement('div');
    partners.classList.add('footer-partners');
    let partnersTable = [
        {
            logo: 'logos/benefit.svg',
            link: 'https://www.benefitsystems.pl/en',
        },
        {
            logo: 'logos/decathlon.png',
            link: 'https://www.decathlon.pl/',
        },
        {
            logo: 'logos/dworzysko.png',
            link: 'https://dworzysko-park.pl/kontakt/',
        },
        {
            logo: 'logos/fabrykasily.png',
            link: 'https://www.fabrykasily.pl/',
        },
        {
            logo: 'logos/infopodkarpacie.png',
            link: 'http://infopodkarpacie.pl/',
        },
        {
            logo: 'logos/lotto.png',
            link: 'https://www.lotto.pl/',
        },
        {
            logo: 'logos/passio.svg',
            link: 'https://passiopoland.pl/',
        },
        {
            logo: 'logos/pukt.png',
            link: 'https://pukt.pl/',
        },
        {
            logo: 'logos/rbeco.png',
            link: 'https://rbeco.pl/',
        },
        {
            logo: 'logos/reshouse.jpg',
            link: 'https://reshouse.pl/',
        },
        {
            logo: 'logos/rzeszow.jpg',
            link: 'https://www.erzeszow.pl/',
        },
        {
            logo: 'logos/rzeszowskie-nieruchomosci.jpg',
            link: 'https://rzeszowskie-nieruchomosci.pl/',
        },
        {
            logo: 'logos/sensis.png',
            link: 'https://www.sensis.rzeszow.pl/',
        },
        {
            logo: 'logos/titum.png',
            link: 'http://titum.pl/',
        }
    ];
    partnersTable.forEach(partner => {
        const partnersLogos = document.createElement('img');
        partnersLogos.src = partner.logo;
        partnersLogos.href = partner.link;
        partners.appendChild(partnersLogos);
    });
    footer.appendChild(partners);



    // ----- Podłączenie całego footera ----- //
    document.body.insertAdjacentElement('beforeend', footer);
}

GenerateFooter();