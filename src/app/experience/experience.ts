import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  data$ = new BehaviorSubject<{
    language: string;
    workExperiences: any[];
  }>({
    language: 'en',
    workExperiences: [],
  });

  get data() {
    return this.data$.value;
  }

  set data(x: any) {
    this.data$.next({ ...this.data, ...x });
  }

  @Input() set language(language: string) {
    if (!language) return;
    this.data = {
      language,
      workExperiences: this.workExperiences[language],
    };
  }

  workExperiences_en: any = [
    {
      company: 'Stardiag',
      location: 'Cluj, Romania',
      period: '04.2023 - 07.2025',
      position: 'Web application developer',
      description: `Helped develop a modular web application using Angular and Go, focused on providing a full, independent management service including atuhentication, realtime database and ACL.`,
      skills: [
        `Worked with PostgreSQL, writing queries, functions, and using features like JSONB, RLS, and full-text search.`,
        `Took part in backend API development, writing Go code to handle data and business logic.`,
        `Participated in planning and technical discussions related to architecture and app structure.`,
      ],
    },
    {
      company: 'ELECTROSERVICE ROZELOR',
      location: 'Mangalia, Romania',
      period: '06.2021 - 12.2022',
      position: 'Commercial graphic designer',
      description: `Managed a graphic design center, offering customers from the ospitality industry comercial solutions ranging from developing a brand identity to promotional products.`,
      skills: [
        `Maintained computer systems and production equipment.`,
        `Assisted customers in developing visual branding for their business.`,
        `Designed commercial materials, including: Flyers, Restaurant menus, Windowgraphics, Logos.`,
        `Operated various production equipment, such as: Laser cutter, Plotter cutter, Thermal transfer press`,
      ],
    },
    {
      company: 'Auto electronics workshop',
      location: 'Mangalia, Romania',
      period: '04.2014 - 04.2021',
      position: 'Web application developer',
      description: `Worked as car electrician in a service center specializing on diagnosing and repairing complex electrical and electronic issues across a wide range of car brands.`,
      skills: [
        `Performed troubleshooting and system analysis to identify and resolve technical problems in vehicle electronics.`,
        `Used diagnostic equipment and interpreted wiring diagrams to detect faults in electrical and electronic systems.`,
      ],
    },
  ];

  workExperiences_ro: any = [
    {
      company: 'Stardiag',
      location: 'Cluj, România',
      period: '04.2023 - 07.2025',
      position: 'Dezvoltator aplicații web',
      description: `Am contribuit la dezvoltarea unei aplicații web modulare folosind Angular și Go, concentrată pe oferirea unui serviciu complet și independent de management, incluzând autentificare, bază de date în timp real și control al accesului (ACL).`,
      skills: [
        `Am lucrat cu PostgreSQL, scriind interogări, funcții și folosind funcționalități precum JSONB, RLS și căutare full-text.`,
        `Am participat la dezvoltarea API-ului backend, scriind cod Go pentru manipularea datelor și a logicii de business.`,
        `Am participat la planificarea și discuțiile tehnice legate de arhitectura și structura aplicației.`,
      ],
    },
    {
      company: 'ELECTROSERVICE ROZELOR',
      location: 'Mangalia, România',
      period: '06.2021 - 12.2022',
      position: 'Designer grafic comercial',
      description: `Am gestionat un centru de design grafic, oferind soluții comerciale clienților din industria ospitalității, de la dezvoltarea unei identități de brand până la produse promoționale.`,
      skills: [
        `Am întreținut sistemele informatice și echipamentele de producție.`,
        `Am asistat clienții în dezvoltarea identității vizuale pentru afacerea lor.`,
        `Am creat materiale comerciale, inclusiv: fluturași, meniuri pentru restaurante, grafică pentru vitrine, logo-uri.`,
        `Am operat diverse echipamente de producție precum: cutter laser, cutter plotter, presă de transfer termic.`,
      ],
    },
    {
      company: 'Atelier de electronică auto',
      location: 'Mangalia, România',
      period: '04.2014 - 04.2021',
      position: 'Tehnician electronist auto',
      description: `Am lucrat ca electronist auto într-un atelier specializat în diagnosticarea și repararea problemelor electrice și electronice complexe pentru o gamă largă de mărci auto.`,
      skills: [
        `Am efectuat diagnosticări și analize de sistem pentru identificarea și remedierea problemelor tehnice în electronica auto.`,
        `Am folosit echipamente de diagnostic și am interpretat scheme electrice pentru a detecta defecțiuni în sistemele electrice și electronice.`,
      ],
    },
  ];

  workExperiences: any = {
    en: this.workExperiences_en,
    ro: this.workExperiences_ro,
  };
}
