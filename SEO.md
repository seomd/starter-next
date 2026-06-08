# SEO.md

## Example Company

### spec v1.0 | https://seomd.dev

## Site

site:
type: saas
domain: example.com
canonical: https://example.com
locale: en-US
launched: null

## Identity

identity:
brand: "Example Company"
tagline: null
social:
twitter: null
linkedin: null
github: null
schema_org_type: Organization

## Keywords

keywords:
primary: "example keyword"
secondary: []
negative: - "free" - "tutorial"
competitor_terms: []
category_terms: - "best example keyword"
long_tail: []
seasonal: null

\_analysis:
source: null
primary_search_volume: null
primary_intent_type: null
primary_trend: null
recommended_secondary: []
negative_additions_suggested: []
last_analyzed: null
next_analysis: null

## Intent

intent:
informational:
priority: medium
queries: - "what is example keyword" - "how does example keyword work"

comparison:
priority: medium
queries: - "example company vs competitor"

transactional:
priority: critical
queries: - "example company pricing" - "is example company worth it"

reputational:
priority: high
queries: - "example company reviews" - "is example company legit"

\_analysis:
source: null
last_analyzed: null
next_analysis: null

## Pages

pages:
site_type: saas

required: - id: homepage
url: /
primary_keyword: "example keyword"
status: live
priority: 1

    - id: features
      url: /features
      primary_keyword: null
      status: planned
      priority: 2

    - id: pricing
      url: /pricing
      primary_keyword: null
      status: planned
      priority: 3
