from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from .models import Leads


class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializer

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        leads = self.request.user.leads.all()
        return leads
