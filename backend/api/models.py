from django.db import models


class Tenant(models.Model):

    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class DataSource(models.Model):

    SOURCE_TYPES = [
        ("SAP", "SAP"),
        ("EXCEL", "Excel"),
        ("API", "API"),
    ]

    tenant = models.ForeignKey(
        Tenant,
        on_delete=models.CASCADE
    )

    source_type = models.CharField(
        max_length=50,
        choices=SOURCE_TYPES
    )

    file_name = models.CharField(
        max_length=255
    )

    uploaded_by = models.CharField(
        max_length=255
    )

    def __str__(self):
        return self.source_type


class EmissionRecord(models.Model):

    STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("APPROVED", "Approved"),
        ("REJECTED", "Rejected"),
    ]

    tenant = models.ForeignKey(
        Tenant,
        on_delete=models.CASCADE
    )

    source = models.ForeignKey(
        DataSource,
        on_delete=models.CASCADE
    )

    category = models.CharField(
        max_length=255
    )

    scope = models.CharField(
        max_length=255
    )

    activity_type = models.CharField(
        max_length=255
    )

    quantity = models.FloatField()

    unit = models.CharField(
        max_length=50
    )

    normalized_value = models.FloatField()

    emission_factor = models.FloatField()

    co2e = models.FloatField()

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    is_suspicious = models.BooleanField(
        default=False
    )

    def __str__(self):
        return self.category


class AuditLog(models.Model):

    record = models.ForeignKey(
        EmissionRecord,
        on_delete=models.CASCADE
    )

    action = models.CharField(
        max_length=255
    )

    performed_by = models.CharField(
        max_length=255
    )

    timestamp = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.action