import type { SdkStoreState } from "embedding-sdk/store/types";
import { createMockSdkState } from "embedding-sdk/test/mocks/state";
import type { EnterpriseState } from "metabase-enterprise/settings/types";
import { createMockUser } from "metabase-types/api/mocks";
import type { State } from "metabase-types/store";

import { createMockAdminState } from "./admin";
import { createMockAppState } from "./app";
import { createMockAuthState } from "./auth";
import { createMockDashboardState } from "./dashboard";
import { createMockEmbedState } from "./embed";
import { createMockNormalizedEntitiesState } from "./entities";
import { createMockMetabotState } from "./metabot";
import { createMockParametersState } from "./parameters";
import { createMockQueryBuilderState } from "./qb";
import { createMockRequestsState } from "./requests";
import { createMockRoutingState } from "./routing";
import { createMockSettingsState } from "./settings";
import { createMockSetupState } from "./setup";
import { createMockUploadState } from "./upload";

export const createMockState = (
  opts?: Partial<State> | Partial<EnterpriseState> | Partial<SdkStoreState>,
): State => ({
  admin: createMockAdminState(),
  app: createMockAppState(),
  auth: createMockAuthState(),
  currentUser: createMockUser(),
  dashboard: createMockDashboardState(),
  embed: createMockEmbedState(),
  entities: createMockNormalizedEntitiesState(),
  metabot: createMockMetabotState(),
  parameters: createMockParametersState(),
  qb: createMockQueryBuilderState(),
  requests: createMockRequestsState(),
  routing: createMockRoutingState(),
  settings: createMockSettingsState(),
  setup: createMockSetupState(),
  upload: createMockUploadState(),
  modal: null,
  sdk: createMockSdkState(),
  ...opts,
});
