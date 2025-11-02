import React from 'react';
import { useParams } from 'react-router-dom';
import SEOWrapper from '../../components/SEO/SEOWrapper';
import CaseStudyDetail from '../../components/Portfolio/CaseStudyDetail';

const baseUrl = 'https://buildmediastrategies.co.uk';

export default function CaseStudy() {
  const { id } = useParams();
  const canonical = baseUrl + `/portfolio/case-study/${id ?? ''}`;
  return (
    <SEOWrapper
      title={`Case Study ${id} | Build Media Strategies`}
      description="In-depth results and process for this project."
      canonical={canonical}
    >
      <section className="max-w-3xl mx-auto px-6 py-12">
        <CaseStudyDetail title={`Case Study ${id}`} results="+120% organic traffic in 3 months">
          <p className="text-gray-300">Overview, goals, and results...</p>
        </CaseStudyDetail>
      </section>
    </SEOWrapper>
  );
}

