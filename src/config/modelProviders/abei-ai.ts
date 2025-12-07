import { ModelProviderCard } from '@/types/llm';

const ABEI_AI: ModelProviderCard = {
  chatModels: [],
  description:
    'ABEI_AI 专用，来自开源项目，不对外商用。',
  enabled: true,
  id: 'abei-ai',
  modelsUrl: 'https://ai.2536629.xyz/zh/docs/usage/subscription/model-pricing',
  name: 'AI',
  settings: {
    modelEditable: false,
    showAddNewModel: false,
    showModelFetcher: false,
  },
  showConfig: false,
  url: 'https://ai.2536629.xyz',
};

export default ABEI_AI;

export const planCardModels = ['gpt-4o-mini', 'deepseek-reasoner', 'claude-3-5-sonnet-latest'];
