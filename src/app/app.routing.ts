import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChartIndexComponent } from './chart-index/chart-index.component';
import { ChartDetailsComponent } from './chart-details/chart-details.component';
import { ChartsComponent } from './charts/charts.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ChartIndexComponent
  },
  {
    path: 'deployments',
    component: DeploymentsComponent,
    data: {
      meta: {
        title: 'Current deployments'
      }
    }
  },
  {
    path: 'deployments/:deploymentName',
    component: DeploymentComponent,
    data: {
      meta: {
        title: 'Deployment information'
      }
    }
  },
  {
    path: 'repos',
    component: RepositoriesComponent,
    data: {
      meta: {
        title: 'Repositories'
      }
    }
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'charts/:repo',
    component: ChartsComponent
  },
  {
    path: 'charts/:repo/:chartName',
    component: ChartDetailsComponent
  },
  {
    path: 'charts/:repo/:chartName/:version',
    component: ChartDetailsComponent
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
    data: {
      meta: {
        title: 'Terms of Service'
      }
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      meta: {
        title: 'Not Found'
      }
    }
  },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
