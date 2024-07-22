import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectFullList = (state) => state.campers.full;
export const selectFavorites = (state) => state.campers.favorites;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectPage = (state) => state.campers.page;
export const selectFilter = (state) => state.campers.filter;

const filteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    if (!filter) return campers;
    const filteredList = campers.filter((el) =>
      el.location.toLowerCase().includes(filter.location.toLowerCase())
    );

    switch (filter.equipment) {
      case "airConditioner":
        return filteredList.filter(
          (el) => el.details.airConditioner && el.details.airConditioner > 0
        );

      default:
        break;
    }

    return filteredList;
  }
);

export const selectFilteredCampers = (state) => filteredCampers(state);
