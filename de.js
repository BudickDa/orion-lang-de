i18n.map('de', {
  global: {
    save: 'Speichern',
    create: 'Erstellen',
    logout: 'Logout',
    back: 'Zurück',
    cancel: 'Abbrechen',
    delete: 'Löschen',
    confirm: 'Bestätigen',
    choose: 'Wähle',
    noPermission: 'Sie sind dazu nicht berechtigt.',
    passwordNotMatch: 'Passwörter stimmen nicht überein',
    optional: 'Optional'
  },
  accounts: {
    schema: {
      emails: {
        title: 'E-Mail',
        address: 'Adresse',
        verified: 'Verifiziert'
      },
      password: {
        title: 'Passwort',
        new: 'Neues Passwort',
        confirm: 'Passwort bestätigen'
      },
      profile: {
        name: 'Name'
      }
    },
    index: {
      title: 'Benutzerkonten',
      actions: {
        edit: 'bearbeiten'
      },
      tableTitles: {
        name: 'Name',
        email: 'E-Mail',
        roles: 'Rolle',
        actions: 'Aktionen'
      }
    },
    update: {
      title: 'Benutzerkonto bearbeiten',
      messages: {
        noPermissions: 'Sie sind nicht berechtigt, diesen Benutzer zu bearbeiten.'
      },
      sections: {
        profile: {
          title: 'Benutzerkonto'
        },
        roles: {
          title: 'Rollen',
          selectRoles: 'Wählen Sie die Rollen des Benutzers'
        },
        changePassword: {
          title: 'Passwort ändern'
        },
        deleteUser: {
          title: 'Kritische Operation',
          advice: 'Das löschen dieses Benutzer kann zu Problemen führen.',
          button: 'Benutzer löschen'
        }
      }
    },
    myAccount: {
      title: 'Mein Benutzerkonto'
    },
    create: {
      title: 'Benutzer erstellen',
      createInvitation: 'Einladung versenden',
      createUserNow: 'Benutzer direkt erstellen',
      inviteOther: 'Weitere Benutzer einladen',
      selectRoles: 'Neue Benutzerrollen',
      email: 'E-Mail',
      messages: {
        successfullyCreated: 'Einladung erfolgreich versendet.'
      }
    },
    changePassword: {
      title: 'Passwort ändern'
    },
    updateProfile: {
      title: 'Benutzerkonto bearbeiten'
    },
    register: {
      title: 'Registrierung',
      registerButton: 'Registrieren',
      fields: {
        email: 'E-Mail',
        name: 'Name',
        password: 'Passwort',
        confirmPassword: 'Passwort (wiederholen)'
      },
      messages: {
        invalidEmail: 'Invalide E-Mailadresse',
        invalidInvitationCode: 'Invalider Einladungscode'
      }
    }
  },
  collections: {
    create: {
      title: '{$1} erstellen'
    },
    update: {
      title: '{$1} editieren'
    },
    delete: {
      title: '{$1} löschen',
      confirmQuestion: 'Sind Sie sicher, dass Sie {$1} löschen möchten?'
    },
    common: {
      defaultPluralName: 'Items',
      defaultSingularName: 'Item'
    }
  },
  config: {
    update: {
      title: 'Optionen'
    }
  },
  dictionary: {
    update: {
      title: 'Wörterbuch'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Datei nicht gefunden [{$i}]',
      errorUploading: 'Fehler beim Hochladen der Datei',
      errorRemoving: 'Fehler beim löschen der Datei'
    }
  },
  pages: {
    schema: {
      title: 'Titel',
      url: 'URL'
    },
    index: {
      title: 'Seiten'
    },
    create: {
      title: 'Seite erstellen',
      chooseTemplate: 'Wähle Template'
    },
    update: {
      title: 'Seite bearbeiten'
    },
    delete: {
      title: 'Seite löschen',
      confirmQuestion: 'Sind Sie sicher, dass Sie diese Seite löschen möchten?'
    }
  },
  attributes: {
    users: {
      pluralName: 'Benutzer',
      singularName: 'Benutzer'
    },
    file: {
      choose: 'Datei wählen',
      noFile: 'Datei fehlt'
    },
    image: {
      choose: 'Wähle Bild'
    },
    images: {
      choose: 'Wähle Bild'
    }
  },
  tabular: {
    search: 'Suche:',
    info: 'Zeige _START_ bis _END_ aus _TOTAL_ Einträgen',
    infoEmpty: 'Zeige 0 bis 0 aus 0 Einträgen',
    lengthMenu: 'Zeige _MENU_ Einträge',
    emptyTable: 'Keine Einträge',
    paginate: {
      first: 'Start',
      previous: 'vorheriges',
      next: 'nächstes',
      last: 'Ende'
    }
  }
});
