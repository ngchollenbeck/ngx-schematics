
export interface I<%= classify(fileName) %> extends IBaseModel {

}
export const I<%= classify(fileName).toUpperCase() %>_DEFAULTS : I<%= classify(fileName) %> = {
  isActive: true
};
