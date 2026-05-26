from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import (
    Tenant,
    DataSource,
    EmissionRecord,
    AuditLog,
)

from .serializers import (
    TenantSerializer,
    DataSourceSerializer,
    EmissionRecordSerializer,
    AuditLogSerializer,
)


class TenantViewSet(viewsets.ModelViewSet):

    queryset = Tenant.objects.all()

    serializer_class = TenantSerializer


class DataSourceViewSet(viewsets.ModelViewSet):

    queryset = DataSource.objects.all()

    serializer_class = DataSourceSerializer


class EmissionRecordViewSet(viewsets.ModelViewSet):

    queryset = EmissionRecord.objects.all()

    serializer_class = EmissionRecordSerializer


class AuditLogViewSet(viewsets.ModelViewSet):

    queryset = AuditLog.objects.all()

    serializer_class = AuditLogSerializer


@api_view(["POST"])
def upload_file(request):

    uploaded_file = request.FILES.get("file")

    if not uploaded_file:

        return Response(
            {
                "error": "No file uploaded"
            },
            status=400
        )

    return Response(
        {
            "message":
            f"{uploaded_file.name} uploaded successfully"
        }
    )