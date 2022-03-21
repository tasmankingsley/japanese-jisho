import { convertXML } from 'simple-xml-to-json';
import { parse } from 'rss-to-json';
import xml from './JMdict_e.xml';

// const xml = '<foo></foo>';

export let jisho;

export function get_json() {
  jisho = convertXML('xml');
  // .then((res) => res);
}
