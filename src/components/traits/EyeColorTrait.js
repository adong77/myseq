import React from 'react';
import SingleVariantTrait from './SingleVariantTrait';
import { PubMed, SNPedia } from '../util/links';

const eyecolor = {
  title: 'Eye Color: Blue/Gray',
  variant: {
    ctg: '15', pos: 28344238, ref: 'A', alt: 'G',
  },
  rsId: 'rs7495174',
  association: [
    { genotype: 'A/A', phenotype: 'Blue/gray eyes more likely' },
    { genotype: 'A/G', phenotype: 'Blue/gray eyes less likely' },
    { genotype: 'G/G', phenotype: 'Blue/gray eyes less likely' },
  ],
};

export default function EyeColorTrait() {
  return (
    <SingleVariantTrait trait={eyecolor}>
      <p>
        This <abbr title="Single Nucleotide Polymorphism">SNP</abbr> in the <i>OCA2</i> gene has been associated with eye color. The A allele often produces blue or gray eye color in Caucasians. [<PubMed pubmedId={17236130} />] Adapted from <SNPedia title="Rs7495174" oldid={1529684} />.
      </p>
    </SingleVariantTrait>
  );
}
