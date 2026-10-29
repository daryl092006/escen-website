<template>
  <main class="page-root">
    <aside class="left-panel">
      <img src="/slider/slider-1.jpg" alt="" class="left-bg" />
      <div class="left-overlay" />
      <div class="left-body">
        <NuxtLink to="/"
          ><img src="/logo/ESECN_LOGO.png" alt="ESCEN" class="left-logo"
        /></NuxtLink>
        <div class="left-text">
          <p class="left-kicker">Dossier de candidature</p>
          <h1 class="left-heading">
            Votre avenir<br /><em class="left-heading-gold">commence ici</em>
          </h1>
          <p class="left-desc">
            Quatre étapes, une quinzaine de minutes. Munissez-vous de vos
            bulletins, de votre relevé de BAC et d'une pièce d'identité avant de
            commencer.
          </p>
        </div>
        <div class="left-note">
          <span class="left-note-icon" aria-hidden="true">●</span>
          <p>
            <strong>Important :</strong> les séries
            <strong>A, C, D, E, F1, F2, F3, F4, G1, G2, G3</strong> sont
            acceptées pour cette procédure.
          </p>
        </div>
        <NuxtLink
          to="/preparation-inscription"
          target="_blank"
          class="left-doc-link"
          >Voir la liste des documents à préparer →</NuxtLink
        >
      </div>
    </aside>
    <section class="right-panel">
      <div class="topbar">
        <NuxtLink to="/" class="back-link">← Retourner au site</NuxtLink>
      </div>
      <nav class="step-nav" aria-label="Étapes de candidature">
        <ol class="step-track">
          <li
            v-for="(label, index) in steps"
            :key="label"
            class="step-item"
            :aria-current="step === index ? 'step' : undefined"
          >
            <span
              class="step-bubble"
              :class="
                step === index
                  ? 'step-active'
                  : step > index
                    ? 'step-done'
                    : 'step-future'
              "
              >{{ step > index ? "✓" : index + 1 }}</span
            ><span
              class="step-label"
              :class="
                step === index
                  ? 'step-label-active'
                  : step > index
                    ? 'step-label-done'
                    : 'step-label-future'
              "
              >{{ label }}</span
            >
          </li>
        </ol>
      </nav>
      <div class="form-zone">
        <section
          v-if="receipt"
          class="panel-card registration-receipt"
          role="status"
        >
          <h2>Dossier reçu par ESCEN</h2>
          <p>
            Votre référence : <strong>{{ receipt }}</strong>
          </p>
          <p>
            La réception de votre candidature ne vaut pas validation de votre
            inscription. Vous recevrez les informations de suivi par mail.
          </p>
          <NuxtLink to="/" class="btn-primary">Retourner au site</NuxtLink>
        </section>
        <section v-else class="panel-card">
          <header class="panel-head">
            <p class="panel-kicker">Étape {{ step + 1 }} / 4</p>
            <h2 class="panel-title">{{ titles[step] }}</h2>
            <p class="panel-sub">{{ descriptions[step] }}</p>
          </header>
          <form
            class="form-body"
            :aria-busy="busy"
            @submit.prevent="continueRegistration"
          >
            <p v-if="error" class="registration-error" role="alert">
              {{ error }}
            </p>
            <p v-if="loading" role="status">
              Chargement de la campagne d’inscription…
            </p>
            <fieldset
              :disabled="busy || loading || !yearId"
              class="registration-fields"
            >
              <template v-if="step === 0">
                <div class="field-grid">
                  <div
                    v-for="field in identityFields"
                    :key="field.key"
                    class="field"
                  >
                    <label class="field-label" :for="field.key"
                      >{{ field.label }} <span class="req">*</span></label
                    ><select
                      v-if="field.key === 'genre'"
                      id="genre"
                      v-model="identity.genre"
                      required
                      class="field-input"
                    >
                      <option value="">Sélectionner</option>
                      <option value="M">Masculin</option>
                      <option value="F">Féminin</option></select
                    ><input
                      v-else
                      :id="field.key"
                      v-model="identity[field.key]"
                      :type="field.type || 'text'"
                      :max="
                        field.key === 'date_naissance' ? yesterday : undefined
                      "
                      :autocomplete="field.autocomplete"
                      required
                      class="field-input"
                      :placeholder="field.placeholder"
                      maxlength="200"
                    />
                  </div>
                  <div class="field field--full registration-nationality">
                    <label id="nationality-label" class="field-label"
                      >Nationalité <span class="req">*</span></label
                    ><button
                      type="button"
                      class="field-input nat-btn nat-trigger"
                      :aria-expanded="nationalityOpen"
                      aria-labelledby="nationality-label"
                      @click="nationalityOpen = !nationalityOpen"
                    >
                      <span
                        :class="
                          identity.nationalite ? 'nat-value' : 'nat-placeholder'
                        "
                        >{{
                          identity.nationalite || "Sélectionner une nationalité"
                        }}</span
                      ><span aria-hidden="true">⌄</span>
                    </button>
                    <div v-if="nationalityOpen" class="nat-menu">
                      <div class="nat-search-row">
                        <input
                          v-model="nationalitySearch"
                          class="field-input"
                          aria-label="Rechercher une nationalité"
                          placeholder="Rechercher…"
                        />
                      </div>
                      <div class="nat-options">
                        <button
                          v-for="country in filteredNationalities"
                          :key="country.value"
                          type="button"
                          class="nat-option"
                          @click="
                            identity.nationalite = country.value;
                            nationalityOpen = false;
                          "
                        >
                          {{ country.label }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="section-sep">
                  <span class="section-sep-label">Coordonnées</span>
                </div>
                <div class="field-grid">
                  <div class="field">
                    <label for="tel" class="field-label"
                      >Téléphone principal <span class="req">*</span></label
                    ><input
                      id="tel"
                      v-model="identity.tel"
                      type="tel"
                      required
                      autocomplete="tel"
                      class="field-input"
                      minlength="6"
                      maxlength="40"
                    />
                    <p class="field-hint">
                      Numéro togolais ou étranger, avec son indicatif pays.
                    </p>
                  </div>
                  <div class="field">
                    <label for="email" class="field-label"
                      >Adresse email <span class="req">*</span></label
                    ><input
                      id="email"
                      v-model="identity.email"
                      type="email"
                      required
                      autocomplete="email"
                      class="field-input"
                      placeholder="mon.adresse@domaine.com"
                      maxlength="254"
                    />
                  </div>
                </div>
              </template>
              <template v-else-if="step === 1"
                ><div class="field-grid">
                  <div class="field field--full">
                    <label for="diploma" class="field-label"
                      >Dernier diplôme obtenu <span class="req">*</span></label
                    ><select
                      id="diploma"
                      v-model="diploma.type_diplome_id"
                      required
                      class="field-input"
                    >
                      <option value="">Sélectionner votre diplôme</option>
                      <option
                        v-for="item in diplomaTypes"
                        :key="item"
                        :value="item"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>
                  <div v-if="isBac" class="field">
                    <label for="serie" class="field-label"
                      >Série <span class="req">*</span></label
                    ><select
                      id="serie"
                      v-model="diploma.serie"
                      required
                      class="field-input"
                    >
                      <option value="">Sélectionner</option>
                      <option v-for="serie in series" :key="serie">
                        {{ serie }}
                      </option>
                    </select>
                  </div>
                  <div v-else class="field">
                    <label for="specialite_diplome" class="field-label"
                      >Domaine d’étude <span class="req">*</span></label
                    ><input
                      id="specialite_diplome"
                      v-model="diploma.specialite_diplome"
                      required
                      class="field-input"
                      maxlength="200"
                    />
                  </div>
                  <div class="field">
                    <label for="year" class="field-label"
                      >Année d’obtention <span class="req">*</span></label
                    ><input
                      id="year"
                      v-model="diploma.annee_diplome"
                      type="number"
                      min="1900"
                      :max="currentYear"
                      required
                      class="field-input"
                    />
                  </div>
                  <div class="field">
                    <label for="mention" class="field-label"
                      >Mention <span class="opt">(optionnel)</span></label
                    ><input
                      id="mention"
                      v-model="diploma.mention_diplome"
                      class="field-input"
                      maxlength="200"
                    />
                  </div>
                  <div class="field">
                    <label for="school" class="field-label"
                      >Établissement <span class="opt">(optionnel)</span></label
                    ><input
                      id="school"
                      v-model="diploma.etablissement_diplome"
                      class="field-input"
                      maxlength="200"
                    />
                  </div></div
              ></template>
              <template v-else-if="step === 2"
                ><div class="field-grid field-grid--1col">
                  <div class="field">
                    <label for="level" class="field-label"
                      >Niveau souhaité <span class="req">*</span></label
                    ><select
                      id="level"
                      v-model="levelId"
                      required
                      class="field-input"
                      @change="changeLevel"
                    >
                      <option value="">Sélectionner un niveau</option>
                      <option
                        v-for="level in levels"
                        :key="level.id"
                        :value="level.id"
                      >
                        {{ level.nom }}
                      </option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="program" class="field-label"
                      >Filière souhaitée <span class="req">*</span></label
                    ><select
                      id="program"
                      v-model="programId"
                      required
                      class="field-input"
                      :disabled="!levelId || catalogLoading"
                      @change="loadDocuments"
                    >
                      <option value="">Sélectionner une filière</option>
                      <option
                        v-for="program in programs"
                        :key="program.id"
                        :value="program.id"
                      >
                        {{ program.nom }}
                      </option>
                    </select>
                  </div>
                </div>
                <p class="field-hint">
                  Vous pouvez envoyer votre candidature même si toutes vos
                  pièces ne sont pas encore disponibles.
                </p>
                <div class="docs-grid">
                  <label
                    v-for="document in documentRequirements"
                    :key="document.document_key"
                    class="dropzone"
                    ><span class="dropzone-doc-label">{{
                      document.nom_affichage
                    }}</span
                    ><input
                      type="file"
                      :accept="
                        document.document_key === 'photo_identite_file'
                          ? 'image/jpeg,image/png'
                          : 'application/pdf,image/jpeg,image/png'
                      "
                      :multiple="document.document_key.startsWith('releve_')"
                      @change="selectFiles(document.document_key, $event)"
                    /><span class="dropzone-doc-hint">{{
                      selectedFiles[document.document_key]
                        ?.map((file) => file.name)
                        .join(", ") ||
                      "PDF, JPEG ou PNG · 5 Mo maximum par fichier"
                    }}</span></label
                  >
                </div></template
              >
              <template v-else
                ><div class="tuteurs-list">
                  <section
                    v-for="(guardian, index) in guardians"
                    :key="guardian.key"
                    class="tuteur-card"
                  >
                    <div class="tuteur-head">
                      <h3 class="tuteur-title">
                        Tuteur / Parent {{ index + 1 }}
                      </h3>
                      <button
                        v-if="guardians.length > 1"
                        type="button"
                        class="remove-btn"
                        @click="guardians.splice(index, 1)"
                      >
                        Retirer
                      </button>
                    </div>
                    <div class="field-grid">
                      <div
                        v-for="field in guardianFields"
                        :key="field.key"
                        class="field"
                      >
                        <label
                          class="field-label"
                          :for="`guardian-${index}-${field.key}`"
                          >{{ field.label }}
                          <span :class="field.required ? 'req' : 'opt'">{{
                            field.required ? "*" : "(optionnel)"
                          }}</span></label
                        ><input
                          :id="`guardian-${index}-${field.key}`"
                          v-model="guardian[field.key]"
                          :type="field.type || 'text'"
                          :required="field.required"
                          class="field-input"
                          :maxlength="field.key === 'adresse' ? 1000 : 200"
                        />
                      </div>
                      <label class="check-label field--full"
                        ><input
                          v-model="guardian.responsable_des_frais"
                          type="checkbox"
                          class="check-box"
                        />Responsable des frais de scolarité</label
                      >
                    </div>
                  </section>
                </div>
                <button
                  v-if="guardians.length < 5"
                  type="button"
                  class="add-tuteur-btn"
                  @click="guardians.push(newGuardian())"
                >
                  ＋ Ajouter un autre tuteur / parent
                </button>
                <div class="consent-row">
                  <input
                    id="accept_cgu"
                    v-model="consent"
                    type="checkbox"
                    required
                    class="check-box"
                  /><label for="accept_cgu"
                    >J’ai lu et j’accepte les
                    <NuxtLink to="/cgu" target="_blank" class="consent-link"
                      >conditions générales d’utilisation</NuxtLink
                    >
                    <span class="req">*</span></label
                  >
                </div></template
              >
              <div class="step-actions">
                <button
                  v-if="step > 0"
                  type="button"
                  class="btn-ghost"
                  @click="
                    step--;
                    error = '';
                  "
                >
                  ← Retour</button
                ><span v-else /><button
                  type="submit"
                  class="btn-primary"
                  :disabled="catalogLoading"
                >
                  {{
                    busy
                      ? "Enregistrement…"
                      : step === 3
                        ? "Soumettre ma candidature"
                        : "Continuer →"
                  }}
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import nationalities from "./nationalities.json";
import { useCandidatureStore } from "~/stores/candidature";
const { $axios } = useNuxtApp();
const store = useCandidatureStore();
const steps = ["Identité & Coordonnées", "Diplôme", "Documents", "Tuteur(s)"];
const titles = [
  "Identité & Coordonnées",
  "Votre diplôme",
  "Vos pièces à fournir",
  "Parent(s) ou tuteur(s)",
];
const descriptions = [
  "Renseignez vos informations personnelles et vos coordonnées.",
  "Précisez votre dernier diplôme obtenu.",
  "Sélectionnez votre niveau et filière pour voir les pièces à joindre à votre dossier.",
  "Renseignez au moins un parent ou tuteur légal. Vous pouvez en ajouter plusieurs si nécessaire.",
];
const identityFields = [
  {
    key: "nom",
    label: "Nom",
    placeholder: "Nom de famille",
    autocomplete: "family-name",
  },
  {
    key: "prenom",
    label: "Prénom(s)",
    placeholder: "Prénom(s)",
    autocomplete: "given-name",
  },
  { key: "genre", label: "Sexe" },
  {
    key: "date_naissance",
    label: "Date de naissance",
    type: "date",
    autocomplete: "bday",
  },
  {
    key: "lieu_naissance",
    label: "Lieu de naissance",
    placeholder: "Ville, Pays",
  },
];
const guardianFields = [
  { key: "nom", label: "Nom", required: true },
  { key: "prenom", label: "Prénom", required: true },
  { key: "profession", label: "Profession" },
  { key: "employeur", label: "Employeur" },
  { key: "email", label: "Email", type: "email" },
  {
    key: "tel",
    label: "Téléphone avec indicatif pays",
    type: "tel",
    required: true,
  },
  { key: "adresse", label: "Adresse" },
];
let guardianKey = 0;
const newGuardian = () => ({
  key: guardianKey++,
  nom: "",
  prenom: "",
  profession: "",
  employeur: "",
  email: "",
  tel: "",
  adresse: "",
  responsable_des_frais: false,
});
const guardians = ref([newGuardian()]);
const identity = reactive({
  nom: "",
  prenom: "",
  genre: "",
  date_naissance: "",
  lieu_naissance: "",
  nationalite: "",
  tel: "",
  email: "",
});
const diploma = reactive({
  type_diplome_id: "",
  serie: "",
  annee_diplome: "",
  mention_diplome: "",
  etablissement_diplome: "",
  specialite_diplome: "",
});
const currentYear = new Date().getFullYear(),
  yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const diplomaTypes = ["BAC", "BTS", "Licence", "Master", "Autre"],
  series = ["A", "C", "D", "E", "F1", "F2", "F3", "F4", "G1", "G2", "G3"];
const isBac = computed(() => diploma.type_diplome_id === "BAC");
const step = ref(0),
  busy = ref(false),
  loading = ref(true),
  error = ref(""),
  receipt = ref("");
const consent = ref(false);
const yearId = ref(""),
  token = ref(""),
  levelId = ref(""),
  programId = ref("");
const levels = ref([]),
  programs = ref([]),
  documentRequirements = ref([]),
  selectedFiles = ref({}),
  catalogLoading = ref(false);
const nationalityOpen = ref(false),
  nationalitySearch = ref("");
const filteredNationalities = computed(() =>
  nationalities.filter((country) =>
    country.label
      .toLocaleLowerCase("fr")
      .includes(nationalitySearch.value.toLocaleLowerCase("fr")),
  ),
);
const storageKey = "escen-site-registration-draft";
const message = (issue, fallback) =>
  issue?.response?.data?.message || issue?.response?.data?.error || fallback;
const rows = (response) => response.data?.data || response.data || [];
const { $intlTelInput } = useNuxtApp();
let phoneWidgets = [];
function clearPhones() {
  phoneWidgets.forEach(({ widget }) => widget.destroy());
  phoneWidgets = [];
}
async function initializePhones() {
  clearPhones();
  await nextTick();
  if (!$intlTelInput) return;
  document
    .querySelectorAll('.page-root input[type="tel"]')
    .forEach((element) => {
      const widget = $intlTelInput(element, {
        initialCountry: "tg",
        separateDialCode: true,
        autoPlaceholder: "off",
        useFullscreenPopup: false,
        loadUtils: () => import("intl-tel-input/utils"),
      });
      if (element.value) widget.setNumber(element.value);
      phoneWidgets.push({ element, widget });
    });
}
function normalizePhones() {
  for (const { element, widget } of phoneWidgets) {
    const raw = element.value.trim();
    if (!raw) continue;
    element.value =
      widget.getNumber() ||
      (raw.startsWith("+")
        ? raw
        : `+${widget.getSelectedCountryData().dialCode}${raw.replace(/\D/g, "")}`);
    element.dispatchEvent(new Event("input", { bubbles: true }));
  }
}
watch([step, () => guardians.value.length], initializePhones);
onBeforeUnmount(clearPhones);
async function changeLevel() {
  programId.value = "";
  programs.value = [];
  documentRequirements.value = [];
  if (!levelId.value) return;
  catalogLoading.value = true;
  error.value = "";
  try {
    programs.value = rows(
      await $axios.get("/public/filieres/liste", {
        params: { niveau_id: levelId.value },
      }),
    );
  } catch (issue) {
    error.value = message(issue, "Les filières sont indisponibles. Réessayez.");
  } finally {
    catalogLoading.value = false;
  }
}
async function loadDocuments() {
  const selectedLevel = levelId.value,
    selectedProgram = programId.value;
  if (!selectedLevel || !selectedProgram) return;
  catalogLoading.value = true;
  error.value = "";
  try {
    const response = await $axios.get(
      `/public/niveau/${selectedLevel}/document-requirements`,
      { params: { filiere_id: selectedProgram } },
    );
    if (levelId.value === selectedLevel && programId.value === selectedProgram)
      documentRequirements.value = rows(response);
  } catch (issue) {
    error.value = message(
      issue,
      "La liste des pièces est indisponible. Réessayez.",
    );
  } finally {
    catalogLoading.value = false;
  }
}
function selectFiles(key, event) {
  const files = [...(event.target.files || [])];
  if (
    files.some(
      (file) =>
        file.size < 1 ||
        file.size > 5 * 1024 * 1024 ||
        !["application/pdf", "image/jpeg", "image/png"].includes(file.type),
    )
  ) {
    error.value = "Utilisez des PDF, JPEG ou PNG de 5 Mo maximum.";
    event.target.value = "";
    return;
  }
  selectedFiles.value[key] = files;
  error.value = "";
}
async function continueRegistration() {
  if (busy.value || loading.value || !yearId.value) return;
  busy.value = true;
  error.value = "";
  try {
    normalizePhones();
    if (step.value === 0) {
      if (!identity.nationalite)
        throw new Error("Sélectionnez votre nationalité.");
      const payload = { ...identity, academic_year_id: yearId.value };
      if (token.value) await store.mettreAJourEtape1(token.value, payload);
      else {
        const result = await store.creerEtape1(payload);
        token.value = result.draft_token;
        localStorage.setItem(storageKey, token.value);
      }
    } else if (step.value === 1) {
      await store.mettreAJourEtape2Bac(token.value, {
        ...diploma,
        serie: isBac.value ? diploma.serie : "",
        annee_bac: isBac.value ? diploma.annee_diplome : "",
        mention_bac: isBac.value ? diploma.mention_diplome : "",
      });
    } else if (step.value === 2) {
      const data = new FormData();
      data.append("academic_year_id", yearId.value);
      data.append("niveau_id", levelId.value);
      data.append("filiere_id", programId.value);
      for (const document of documentRequirements.value)
        (selectedFiles.value[document.document_key] || []).forEach(
          (file, index) =>
            data.append(
              document.document_key.startsWith("releve_")
                ? `${document.document_key}[${index}]`
                : document.document_key,
              file,
            ),
        );
      await store.soumettreEtape3Documents(token.value, data);
    } else {
      if (!consent.value)
        throw new Error(
          "Acceptez les conditions générales avant de poursuivre.",
        );
      const data = new FormData();
      data.append("accept_cgu", "1");
      guardians.value.forEach((guardian, index) => {
        for (const field of guardianFields)
          data.append(`tuteurs[${index}][${field.key}]`, guardian[field.key]);
        data.append(
          `tuteurs[${index}][responsable_des_frais]`,
          guardian.responsable_des_frais ? "1" : "0",
        );
      });
      const result = await store.finaliserEtape4(token.value, data);
      receipt.value = result.reference;
      localStorage.removeItem(storageKey);
      token.value = "";
      return;
    }
    step.value++;
  } catch (issue) {
    error.value = message(
      issue,
      issue.message ||
        "Enregistrement impossible. Vos informations restent dans le formulaire. Réessayez.",
    );
  } finally {
    busy.value = false;
  }
}
onMounted(async () => {
  try {
    const [configuration, catalog] = await Promise.all([
      $axios.get("/public/candidature-config"),
      $axios.get("/public/niveau/liste"),
    ]);
    yearId.value = configuration.data.academic_year?.id || "";
    levels.value = rows(catalog);
    if (!yearId.value)
      throw new Error(
        "Aucune campagne d’inscription n’est ouverte actuellement.",
      );
    const saved = localStorage.getItem(storageKey);
    if (saved && /^[a-f0-9]{64}$/.test(saved)) {
      const draft = await store.recupererBrouillon(saved);
      if (draft?.candidat?.academic_year_id === yearId.value) {
        token.value = saved;
        for (const key of Object.keys(identity))
          if (draft.candidat[key] != null) identity[key] = draft.candidat[key];
        for (const key of Object.keys(diploma))
          if (draft.candidat[key] != null) diploma[key] = draft.candidat[key];
      }
    }
  } catch (issue) {
    error.value = message(
      issue,
      issue.message ||
        "Campagne indisponible. Actualisez la page pour réessayer.",
    );
  } finally {
    loading.value = false;
    await initializePhones();
  }
});
</script>

<style scoped src="./registration.css" />
<style scoped>
.registration-fields {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}
.registration-error {
  color: #9f1239;
  background: #fff1f2;
  padding: 14px;
  border-radius: 8px;
  margin-bottom: 20px;
}
.registration-nationality {
  position: relative;
}
.nat-trigger {
  width: 100%;
  text-align: left;
  justify-content: space-between;
}
.nat-menu {
  z-index: 20;
}
.registration-receipt {
  padding: 32px;
  line-height: 1.7;
}
.registration-receipt h2 {
  font-size: 24px;
  font-weight: 700;
}
.registration-receipt p {
  margin: 16px 0;
}
.step-track {
  list-style: none;
  padding-left: 0;
}
.step-track::before {
  content: "";
  position: absolute;
  height: 2px;
  background: #e5e3df;
  left: 14px;
  right: 14px;
  top: 14px;
}
.topbar {
  justify-content: flex-end;
}
.left-doc-link {
  display: inline-flex;
}
@media (max-width: 768px) {
  .step-label {
    font-size: 9px;
    overflow-wrap: anywhere;
    letter-spacing: 0.04em;
  }
  .step-item {
    min-width: 0;
  }
}
</style>
