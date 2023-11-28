export default {
  FILTER_DATE: "filter_date"
};

export const getCategoriesAndZones = (data) => {
  const categories = [...new Set(data.map(item => item.category))].sort();
  const zones = [...new Set(data.map(item => item.zone_in))].sort((a, b) => a - b);

  return {
    categories,
    zones
  };
}


export const calculateCategorySums = (data) => {
  const categorySumsByDay = {};
  data.forEach((item) => {
    const { timestamp, category } = item;
    const date = new Date(timestamp).toISOString().split('T')[0];
    if (!categorySumsByDay[date]) {
      categorySumsByDay[date] = {};
    }
    if (!categorySumsByDay[date][category]) {
      categorySumsByDay[date][category] = 0;
    }
    categorySumsByDay[date][category] += 1;
  });
  return categorySumsByDay;
}


export const getCategoryPerZone = (data, category, zones) => {
  const selectedCategory = category.length === 0 ? data.map(item => item.category) : category;
  const selectedZones = zones.length === 0 ? data.map(item => item.zone_in) : zones;

  return data.filter(item => {
    const categoryMatch = selectedCategory.includes(item.category);
    const zoneMatch = selectedZones.includes(item.zone_in) || selectedZones.includes(item.zone_out);

    return categoryMatch && zoneMatch;
  })
}



export const zoneAnalysis=(data)=> {
  const zoneActivity = {};

  data.forEach((entry) => {
    const category = entry.category;
    const zoneIn = entry.zone_in;
    const zoneOut = entry.zone_out;

    if (!zoneActivity[category]) {
      zoneActivity[category] = {
        zoneInActivity: {},
        zoneOutActivity: {},
      };
    }

    if (!zoneActivity[category].zoneInActivity[zoneIn]) {
      zoneActivity[category].zoneInActivity[zoneIn] = 1;
    } else {
      zoneActivity[category].zoneInActivity[zoneIn]++;
    }

    if (!zoneActivity[category].zoneOutActivity[zoneOut]) {
      zoneActivity[category].zoneOutActivity[zoneOut] = 1;
    } else {
      zoneActivity[category].zoneOutActivity[zoneOut]++;
    }
  });

  const result = {};
  for (const category in zoneActivity) {
    result[category] = {
      zoneInMostActive: Object.keys(zoneActivity[category].zoneInActivity).reduce(
        (a, b) => (zoneActivity[category].zoneInActivity[a] > zoneActivity[category].zoneInActivity[b] ? a : b)
      ),
      zoneOutMostActive: Object.keys(zoneActivity[category].zoneOutActivity).reduce(
        (a, b) => (zoneActivity[category].zoneOutActivity[a] > zoneActivity[category].zoneOutActivity[b] ? a : b)
      ),
    };
  }

  return result;
}
