from django.urls import (
    path,
    include,
)

from rest_framework.routers import (
    DefaultRouter,
)

from .views import (
    TenantViewSet,
    DataSourceViewSet,
    EmissionRecordViewSet,
    AuditLogViewSet,
    upload_file,
)

router = DefaultRouter()

router.register(
    "tenants",
    TenantViewSet
)

router.register(
    "data-sources",
    DataSourceViewSet
)

router.register(
    "emission-records",
    EmissionRecordViewSet
)

router.register(
    "audit-logs",
    AuditLogViewSet
)

urlpatterns = [

    path(
        "",
        include(router.urls)
    ),

    path(
        "upload/",
        upload_file
    ),
]