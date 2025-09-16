import Garis from './garis.model';

export default interface DruzenjaModel {
  id: string;
  title: string;
  date: string;
  location: string;
  garis: Garis[];
}
