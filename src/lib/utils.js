import excursion from '../data/excursions_lang.json'

const slug = excursion
const getExcursionIdBySlug = (slug) => {
    const excursions = [...excursionsData.excursions_es, ...excursionsData.excursions_en];
    const excursion = excursions.find(excursion => excursion.slug === slug);
    return excursion ? excursion.id : null;
};